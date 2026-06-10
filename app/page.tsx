"use client";

import Image from "next/image";
import Link from "next/link";
import { Avatar3D } from "@/components/Avatar3D";
import { Card } from "@/components/Card";
import { useMode } from "@/components/ModeProvider";
import { professionalExperiences, profile, projects, skills } from "@/data/portfolio";

export default function HomePage() {
  const { mode } = useMode();
  const isCreative = mode === "creative";
  const visibleProjects = projects.filter((project) => project.mode === mode).slice(0, 3);

  if (isCreative) {
    return (
      <div className="creative-home relative grid gap-14 overflow-hidden lg:grid-cols-[1fr_450px] lg:items-center">
        <div className="creative-biome-horizon pointer-events-none absolute inset-x-[-15vw] top-[22rem] h-64" aria-hidden="true" />
        <div className="creative-cloud left-[8%] top-8" />
        <div className="creative-cloud right-[10%] top-24 scale-75 opacity-40" />
        <div className="creative-particles pointer-events-none absolute inset-0" aria-hidden="true" />
        <section className="creative-hero-console relative z-10">
          <p className="inline-flex inventory-slot px-4 py-2 font-pixel text-sm uppercase tracking-[0.24em] text-lime-100">
            Creative Mode unlocked
          </p>
          <h1 className="mt-6 text-5xl font-black tracking-tight text-lime-50 sm:text-7xl">
            Welcome to Chhavi&apos;s creative overworld.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-lime-100/80">
            This world only contains creative projects, storytelling, community work, visual systems, and experiments. No corporate resume mobs spawn here.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/projects" className="pixel-border bg-[#3FA34D] px-5 py-3 font-pixel text-sm font-bold uppercase text-white transition hover:-translate-y-1 hover:brightness-110">
              Start exploring
            </Link>
            <Link href="/experience" className="inventory-slot px-5 py-3 font-pixel text-sm font-bold uppercase text-lime-100 transition hover:brightness-125">
              View creative quests
            </Link>
          </div>
          <div className="mt-11 grid gap-4 sm:grid-cols-3">
            {[
              ["BOOK", "Storytelling"],
              ["MAP", "Community"],
              ["TREE", "Worldbuilding"]
            ].map(([icon, label]) => (
              <div key={label} className="creative-stat inventory-slot p-4 font-pixel text-lime-100">
                <span className="creative-item-icon mb-3 grid h-9 w-9 place-items-center text-[9px]">{icon}</span>
                {label}
              </div>
            ))}
          </div>
        </section>
        <Avatar3D />
        <section className="creative-build-section relative z-10 lg:col-span-2">
          <div className="minecraft-panel signboard-heading inline-block px-6 py-3">
            <h2 className="font-pixel text-2xl text-[#F8F3D6] [text-shadow:2px_2px_0_#1A1A1A]">Creative Builds</h2>
          </div>
          <div className="mt-7 grid gap-7 md:grid-cols-3">
            {visibleProjects.map((project) => (
              <Card key={project.slug} title={project.title} eyebrow={project.status === "placeholder" ? "Quest not started" : "Active build"} href={`/projects/${project.slug}`}>
                {project.summary}
              </Card>
            ))}
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="grid gap-24">
      <section className="professional-hero grid gap-12 py-10 lg:grid-cols-[1.08fr_.92fr] lg:items-center lg:py-16">
        <div className="relative z-10">
          <p className="inline-flex rounded-full border border-[#F47C7C]/25 bg-[#FFD6C9]/45 px-4 py-2 text-sm font-bold uppercase tracking-[0.24em] text-[#E94864]">
            Technical Program Manager
          </p>
          <h1 className="mt-7 max-w-4xl text-5xl font-bold leading-[1.02] tracking-[-0.045em] text-[#1F2937] sm:text-7xl">
            AI platforms, enterprise systems, and execution that ships.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#6B7280]">
            {profile.summary} I bring structure to ambiguous technical programs, align cross-functional teams, and turn operational complexity into measurable outcomes.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/experience" className="rounded-full bg-[#F47C7C] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_16px_34px_rgba(244,124,124,.28)] transition hover:-translate-y-0.5 hover:bg-[#ef6a6a]">
              View experience
            </Link>
            <Link href="/projects" className="rounded-full border border-[#FFD6C9] bg-white/85 px-6 py-3.5 text-sm font-semibold text-[#1F2937] shadow-[0_12px_30px_rgba(107,114,128,.08)] transition hover:-translate-y-0.5 hover:border-[#A7D8FF] hover:bg-[#FFF9F5]">
              See projects
            </Link>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[520px]">
          <div className="absolute -left-12 top-12 h-36 w-36 rounded-full bg-[#FCE4EC] blur-sm" />
          <div className="absolute -right-8 bottom-10 h-40 w-40 rounded-full bg-[#A7D8FF]/50 blur-md" />
          <div className="headshot-frame relative overflow-hidden rounded-[2.75rem] p-3">
            <Image
              src={profile.headshot}
              alt="Professional headshot of Chhavi Kumari"
              width={520}
              height={620}
              className="relative z-10 mx-auto h-[530px] w-full rounded-[2.25rem] object-cover object-[50%_42%] sm:h-[620px]"
              priority
            />
            <div className="absolute inset-x-10 bottom-7 z-20 rounded-2xl border border-white/40 bg-white/[0.72] px-5 py-4 shadow-[0_16px_40px_rgba(65,47,40,.12)] backdrop-blur-xl">
              <p className="font-semibold text-[#1F2937]">Chhavi Kumari</p>
              <p className="mt-1 text-sm text-[#6B7280]">Technical Program Manager · Los Angeles</p>
            </div>
          </div>
        </div>
      </section>
      <section className="grid gap-5 md:grid-cols-3">
        {[
          ["70%+", "faster AI platform development cycles"],
          ["35%", "partner data reliability improvement"],
          ["$7.8B", "energy plant manufacturing approval scope"]
        ].map(([metric, label]) => (
          <div key={metric} className="metric-card glass-card rounded-[1.75rem] p-8 transition hover:-translate-y-1">
            <p className="text-4xl font-bold text-[#E94864]">{metric}</p>
            <p className="mt-3 text-sm leading-6 text-[#6B7280]">{label}</p>
          </div>
        ))}
      </section>
      <section>
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#F47C7C]">Program leadership</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#1F2937]">Experience</h2>
          </div>
          <Link href="/experience" className="text-sm font-semibold text-[#E94864]">
            All roles →
          </Link>
        </div>
        <div className="mt-7 grid gap-6 lg:grid-cols-3">
          {professionalExperiences.slice(0, 3).map((experience) => (
            <Card key={experience.slug} title={experience.role} eyebrow={`${experience.company} · ${experience.dates}`} href={`/experience/${experience.slug}`}>
              <ul className="space-y-3">
                {experience.highlights.slice(0, 2).map((highlight) => (
                  <li key={highlight}>• {highlight}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>
      <section>
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#F47C7C]">Toolkit</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#1F2937]">Core Skills</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {skills.professional.slice(0, 12).map((skill) => (
            <span key={skill} className="rounded-full border border-[#FFD6C9] bg-white/85 px-4 py-2.5 text-sm text-[#6B7280] shadow-sm transition hover:-translate-y-0.5 hover:border-[#A7D8FF] hover:bg-[#A7D8FF]/20">
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
