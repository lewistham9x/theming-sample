import Link from "next/link";
import { Button, buttonVariants } from "../components/ui/button";
import { cn } from "../lib/utils";
import { GeneralLayout } from "../layout/general-layout";

const FEATURES_DATA = [
  {
    title: "Effortless Note Creation & Organization",
    description:
      "Intuitively create and organize digital notes with customizable folders.",
  },
  {
    title: "Real-Time Collaborative Editing",
    description:
      "Foster efficient teamwork through shared notes with simultaneous editing.",
  },
  {
    title: "Task Integration for Productivity",
    description:
      "Transform notes into tasks with due dates and integrate with popular tools.",
  },
  {
    title: "Cross-Platform Accessibility",
    description:
      "Access notes anytime, anywhere, on any device with synchronized versions.",
  },
  {
    title: "Secure Storage & Privacy",
    description:
      "Ensure digital note safety with end-to-end encryption and secure authentication.",
  },
  {
    title: "Efficient Search & Organization",
    description:
      "Easily find and manage notes using powerful search and tagging features.",
  },

];
export default function Home() {
  return (
    <>
      <GeneralLayout>
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
              Paper Notes
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Where Ideas Take Flight, Together!
            </p>
            <div className="space-x-4">
              <Link href="/login">
                <Button size={"lg"}>Get Started</Button>
              </Link>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
        >
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-4xl">
              Features
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              PaperNote is a versatile digital platform designed to elevate your
              note-taking experience.
            </p>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Seamlessly create, organize, and collaborate on notes with
              powerful features that enhance productivity and ensure
              accessibility across all your devices.
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            {FEATURES_DATA.map((feature, index) => (
              <DisplayElement
                key={index}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
       
        </section>
      </GeneralLayout>
    </>
  );
}

interface DisplayElementProps {
  title: string;
  description: string;
}
const DisplayElement = (props: DisplayElementProps) => {
  const { title, description } = props;
  return (
    <div className="relative overflow-hidden rounded-lg border bg-background p-2">
      <div className="flex flex-col justify-between rounded-md p-4">
        <div className="space-y-2">
          <h3 className="font-bold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
};
