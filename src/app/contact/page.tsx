"use client";

import { useState } from "react";
import {
  CheckCircle2,
  Send,
} from "lucide-react";
import { SUBJECTS } from "@/lib/constants";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    standard: "Std 8",
    board: "CBSE",
    subjects: ["Mathematics", "Physics"],
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubjectToggle = (subjName: string) => {
    setFormData((prev) => {
      const exists = prev.subjects.includes(subjName);
      return {
        ...prev,
        subjects: exists
          ? prev.subjects.filter((s) => s !== subjName)
          : [...prev.subjects, subjName],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Send enquiry via email using mailto
    const subject = encodeURIComponent(`New Enquiry — ${formData.name} (${formData.standard}, ${formData.board})`);
    const body = encodeURIComponent(`Name: ${formData.name}\nPhone: ${formData.phone}\nStandard: ${formData.standard}\nBoard: ${formData.board}\nSubjects: ${formData.subjects.join(", ")}\nNotes: ${formData.message || "None"}`);

    const mailtoUrl = `mailto:letsstudy2022bu@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 1200);
  };

  return (
    <div className="pb-20">
      {/* Header */}
      <section className="bg-gradient-to-b from-teal-50/70 via-cream-50 to-white pt-28 pb-16 md:pt-36 md:pb-20 border-b border-slate-200/60 math-bg text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-5xl font-black font-heading text-navy-950">
            Ask any Question
          </h1>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        {/* Mobile-only Quick Help Alert */}
        <div className="md:hidden mb-6 p-4 rounded-2xl bg-teal-50 border border-teal-200/80 flex items-center justify-between gap-3 text-xs">
          <div>
            <p className="font-bold text-navy-950">Want instant answers?</p>
            <p className="text-slate-600 text-[11px]">Talk directly to our academic counselor.</p>
          </div>
          <a
            href="tel:+918481819726"
            className="px-3.5 py-2 rounded-full bg-teal-700 text-white font-bold text-xs shrink-0 shadow-xs active:scale-95"
          >
            Call Now
          </a>
        </div>

        <div className="bg-white rounded-3xl p-5 sm:p-10 border border-slate-200 shadow-xl">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="text-2xl font-black font-heading text-navy-950">
                Enquiry Submitted Successfully!
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you, <strong className="text-navy-900">{formData.name}</strong>. Your enquiry has been sent. Our academic team will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-black font-heading text-navy-950">
                  Enquiry Form
                </h2>
              </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-navy-900 uppercase tracking-wider block mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sumita Mukherjee"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-navy-900 uppercase tracking-wider block mb-1">
                      Mobile Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98300 XXXXX"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-slate-50/50"
                    />
                  </div>
                </div>

                {/* Standard & Board */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-navy-900 uppercase tracking-wider block mb-1">
                      Child&apos;s Standard *
                    </label>
                    <select
                      value={formData.standard}
                      onChange={(e) =>
                        setFormData({ ...formData, standard: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
                    >
                      <option value="Std 5">Std 5</option>
                      <option value="Std 6">Std 6</option>
                      <option value="Std 7">Std 7</option>
                      <option value="Std 8">Std 8</option>
                      <option value="Std 9">Std 9</option>
                      <option value="Std 10">Std 10</option>
                      <option value="Std 11">Std 11</option>
                      <option value="Std 12">Std 12</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-navy-900 uppercase tracking-wider block mb-1">
                      School Board *
                    </label>
                    <select
                      value={formData.board}
                      onChange={(e) =>
                        setFormData({ ...formData, board: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
                    >
                      <option value="CBSE">CBSE</option>
                      <option value="ICSE">ICSE / ISC</option>
                      <option value="WB Board (English)">WB Board — English Medium</option>
                      <option value="WB Board (Bengali)">WB Board — Bengali Medium</option>
                    </select>
                  </div>
                </div>

                {/* Subjects Multi-Select */}
                <div>
                  <label className="text-xs font-bold text-navy-900 uppercase tracking-wider block mb-2">
                    Subjects of Interest (Select All That Apply):
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {SUBJECTS.map((sub) => {
                      const isSelected = formData.subjects.includes(sub.name);
                      return (
                        <button
                          type="button"
                          key={sub.id}
                          onClick={() => handleSubjectToggle(sub.name)}
                          className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer flex items-center gap-1.5 ${
                            isSelected
                              ? "bg-navy-900 text-white border-navy-900 shadow-sm"
                              : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                          }`}
                        >
                          <span className="font-serif">{sub.symbol}</span>
                          <span>{sub.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="text-xs font-bold text-navy-900 uppercase tracking-wider block mb-1">
                    Specific Gaps / Notes (Optional):
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about specific subjects where the student needs focus..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-slate-50/50"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-pill btn-amber w-full justify-center text-sm font-bold !py-3.5 shadow-lg flex items-center gap-2"
                >
                  <Send size={16} />
                  <span>Submit Form</span>
                </button>
              </form>
            )}
          </div>
      </div>
    </div>
  );
}
