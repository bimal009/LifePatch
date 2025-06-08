"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const stories = [
  {
    name: "Anita Shrestha",
    story:
      "I never thought a platform like LifePatch could help me find a matching kidney donor. Forever grateful.",
    image: "/images/anita.jpg",
  },
  {
    name: "Ramesh Karki",
    story:
      "LifePatch connected me with a family who was willing to donate. It changed my life.",
    image: "/images/ramesh.jpg",
  },
  {
    name: "Bina Maharjan",
    story:
      "As a donor, I felt safe and informed throughout the process. Amazing experience.",
    image: "/images/bina.jpg",
  },
];

export default function StorySection() {
  return (
    <section className="py-12 px-4 bg-[var(--primary-bg)]">
      <h2 className="text-3xl font-bold text-center text-[var(--text-color)] mb-8">
        Stories of Hope
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {stories.map((item, idx) => (
          <Card
            key={idx}
            className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl shadow-sm"
          >
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Avatar className="w-16 h-16 mb-4">
                <AvatarImage src={item.image} alt={item.name} />
                <AvatarFallback>{item.name[0]}</AvatarFallback>
              </Avatar>
              <p className="text-lg font-semibold text-[var(--text-color)]">
                {item.name}
              </p>
              <p className="text-sm mt-2 text-[var(--muted-color)]">
                {item.story}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
