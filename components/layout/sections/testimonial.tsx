"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "Sarah Mitchell",
    userName: "CEO, TechStart Inc",
    comment:
      "Littu transformed our vision into a fully functional platform in just 3 months. Their technical expertise and communication were outstanding.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Marcus Chen",
    userName: "Founder, DataFlow",
    comment:
      "The team at Littu delivered a complex enterprise solution that exceeded our expectations. They truly understand modern software development.",
    rating: 4.9,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Emily Rodriguez",
    userName: "CTO, HealthTech Solutions",
    comment:
      "Working with Littu was a game-changer for our startup. They built a scalable mobile app that our users love and that grows with our business.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "David Thompson",
    userName: "Operations Director, LogiCorp",
    comment:
      "Littu automated our entire inventory management system, saving us 20+ hours per week. Professional, reliable, and results-driven.",
    rating: 4.8,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Jessica Park",
    userName: "Product Manager, FinServe",
    comment:
      "From concept to launch, Littu was with us every step of the way. Their agile approach kept the project on track and on budget.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Robert Williams",
    userName: "Managing Director, RetailPlus",
    comment:
      "The custom e-commerce platform Littu built for us has increased our online sales by 150%. Best investment we've made.",
    rating: 4.9,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Testimonials
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          What Our Clients Say
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src="https://avatars.githubusercontent.com/u/75042455?v=4"
                        alt="radix"
                      />
                      <AvatarFallback>SV</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
