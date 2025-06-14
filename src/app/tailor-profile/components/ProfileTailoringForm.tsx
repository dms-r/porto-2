"use client";

import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Sparkles } from 'lucide-react';
import { generateSummaryAction } from '../actions'; // Import the server action

const formSchema = z.object({
  jobDescription: z.string().min(50, {
    message: "Job description must be at least 50 characters.",
  }).max(5000, {
    message: "Job description must not exceed 5000 characters."
  }),
});

export default function ProfileTailoringForm() {
  const [generatedSummary, setGeneratedSummary] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      jobDescription: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
      setGeneratedSummary(null);
      const result = await generateSummaryAction(values.jobDescription);

      if (result.error) {
        toast({
          variant: "destructive",
          title: "Error Generating Summary",
          description: result.error,
        });
      } else if (result.summary) {
        setGeneratedSummary(result.summary);
        toast({
          title: "Summary Generated!",
          description: "Your personalized summary is ready below.",
        });
      }
    });
  }

  return (
    <Card className="shadow-xl animate-fadeInUp">
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl font-headline text-primary text-center">Tailor My Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="jobDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-md font-semibold">Job Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Paste the job description here (min 50 characters)..."
                      className="min-h-[200px] resize-y text-sm"
                      {...field}
                      aria-describedby="jobDescription-help"
                    />
                  </FormControl>
                  <p id="jobDescription-help" className="text-xs text-muted-foreground">
                    The more detailed the job description, the better the tailored summary.
                  </p>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isPending} className="w-full text-base py-3">
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-5 w-5" />
                  Generate Summary
                </>
              )}
            </Button>
          </form>
        </Form>

        {generatedSummary && (
          <div className="mt-8 p-6 border border-accent/30 rounded-lg bg-accent/5 animate-fadeIn">
            <h3 className="text-lg font-headline font-semibold text-primary mb-3 flex items-center">
              <Sparkles className="mr-2 h-5 w-5 text-accent" />
              Personalized Summary:
            </h3>
            <p className="text-foreground whitespace-pre-line leading-relaxed text-sm md:text-base">{generatedSummary}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
