import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const events = [
	{
		title: "Youth Tech Training 2024",
		description:
			"Join our intensive tech training program aimed at empowering 800 youth with practical job skills in programming, design, and digital marketing.",
		date: "March 15-30, 2024",
		location: "Jalingo Tech Hub",
		image: "/images/youth-tech.jpg",
		status: "Upcoming",
	},
	{
		title: "Digital Innovation Workshop",
		description:
			"A comprehensive workshop focusing on innovative ideas and digital entrepreneurship for 300 aspiring tech entrepreneurs.",
		date: "April 5-7, 2024",
		location: "Lake View Conference Center",
		image: "/images/innovation.jpg",
		status: "Registration Open",
	},
	{
		title: "Web Development Bootcamp",
		description:
			"Intensive 2-week bootcamp covering modern web development technologies and best practices.",
		date: "May 1-14, 2024",
		location: "AlGaddaf Digital Hub",
		image: "/images/webdev.jpg",
		status: "Coming Soon",
	},
	{
		title: "Design Thinking Masterclass",
		description:
			"Learn the principles of design thinking and how to apply them to solve real-world problems.",
		date: "June 2024",
		location: "Virtual Event",
		image: "/images/design.jpg",
		status: "Planning",
	},
];

export default function EventsSection() {
	return (
		<section className="py-16 md:py-32">
			<div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
				<div className="text-center">
					<h2 className="text-4xl font-semibold lg:text-5xl mb-4">
						Upcoming Events
					</h2>
					<p className="text-muted-foreground">
						Join us in shaping the future of technology
					</p>
				</div>

				<div className="grid gap-8 md:grid-cols-2 lg:gap-12">
					{events.map((event, index) => (
						<div
							key={index}
							className="group rounded-xl border overflow-hidden hover:border-primary transition-all duration-300"
						>
							<div className="relative h-48 w-full">
								<Image
									src={event.image}
									alt={event.title}
									fill
									className="object-cover transition-transform group-hover:scale-105"
									priority={index < 2}
								/>
								<div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
									{event.status}
								</div>
							</div>

							<div className="p-6">
								<h3 className="text-xl font-semibold mb-2">
									{event.title}
								</h3>
								<p className="text-muted-foreground mb-4">
									{event.description}
								</p>
								<div className="flex flex-col gap-2 text-sm text-muted-foreground">
									<div className="flex items-center gap-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
										>
											<rect
												x="3"
												y="4"
												width="18"
												height="18"
												rx="2"
												ry="2"
											></rect>
											<line x1="16" y1="2" x2="16" y2="6"></line>
											<line x1="8" y1="2" x2="8" y2="6"></line>
											<line x1="3" y1="10" x2="21" y2="10"></line>
										</svg>
										<span>{event.date}</span>
									</div>
									<div className="flex items-center gap-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
										>
											<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
											<circle cx="12" cy="10" r="3"></circle>
										</svg>
										<span>{event.location}</span>
									</div>
								</div>
								<div className="mt-6">
									<Button
										asChild
										variant="outline"
										className="w-full"
									>
										<Link
											href={`/events/${event.title
												.toLowerCase()
												.replace(/\s+/g, "-")}`}
										>
											Learn More
										</Link>
									</Button>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="text-center mt-12">
					<Button asChild size="lg">
						<Link href="/events">View All Events</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
