'use client'

import { useState, useRef, FormEvent } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { LeafIcon, HeartIcon, BrainIcon, ShieldIcon, ChevronDownIcon, XIcon, CheckIcon, UserIcon } from "lucide-react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const aboutRef = useRef<HTMLElement>(null)
  const servicesRef = useRef<HTMLElement>(null)
  const whyUsRef = useRef<HTMLElement>(null)
  const faqRef = useRef<HTMLElement>(null)
  const teamRef = useRef<HTMLElement>(null)
  const ctaRef = useRef<HTMLElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleConsultationSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your server or API
    console.log('Consultation form submitted:', { name, email, phone, message })
    setIsModalOpen(false)
    setName('')
    setEmail('')
    setPhone('')
    setMessage('')
    alert('Thank you for booking a consultation. We will contact you soon!')
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
  };

  const stagger = {
    animate: { transition: { staggerChildren: 0.1 } }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 h-16 flex items-center bg-white shadow-sm">
        <Link className="flex items-center justify-center" href="#">
          <LeafIcon className="h-6 w-6 text-green-600" />
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="ml-2 text-2xl font-bold text-gray-900"
          >
            Optimized Health
          </motion.span>
        </Link>
        <motion.nav 
          className="ml-auto flex gap-4 sm:gap-6"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {[
            { name: "About", ref: aboutRef },
            { name: "Services", ref: servicesRef },
            { name: "Why Us", ref: whyUsRef },
            { name: "FAQ", ref: faqRef },
            { name: "Team", ref: teamRef },
          ].map((item) => (
            <motion.div key={item.name} variants={fadeInUp}>
              <button onClick={() => scrollToSection(item.ref)} className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors">
                {item.name}
              </button>
            </motion.div>
          ))}
        </motion.nav>
      </header>
      <main className="flex-1 pt-16">
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-2"
              >
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900">
                  Discover Your Path to <span className="text-green-600">Optimal Health</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Experience personalized, root-cause focused healthcare that empowers you to achieve lasting wellness.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="space-x-4"
              >
                <Button className="bg-green-600 text-white hover:bg-green-700" onClick={() => setIsModalOpen(true)}>Book a Consultation</Button>
                <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50" onClick={() => scrollToSection(aboutRef)}>Learn More</Button>
              </motion.div>
            </div>
          </div>
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
          >
            <ChevronDownIcon className="h-8 w-8 text-green-600" />
          </motion.div>
        </section>
        <section ref={aboutRef} className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <motion.h2
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-gray-900"
            >
              Our Approach
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                { icon: HeartIcon, title: "Personalized Care", description: "Tailored treatment plans based on your unique needs" },
                { icon: BrainIcon, title: "Root Cause Focus", description: "Addressing the underlying issues, not just symptoms" },
                { icon: ShieldIcon, title: "Preventive Strategies", description: "Empowering you with tools for long-term health" },
                { icon: LeafIcon, title: "Natural Approaches", description: "Harnessing the power of nature and nutrition" },
              ].map((feature, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="p-6 h-full border-green-100 hover:border-green-300 transition-colors">
                    <feature.icon className="h-10 w-10 text-green-600 mb-2" />
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        <section ref={servicesRef} className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <motion.h2
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-gray-900"
            >
              Our Services
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                { title: "Functional Medicine Consultation", description: "Comprehensive health assessment and personalized treatment plans" },
                { title: "Nutritional Counseling", description: "Expert guidance on diet and supplements for optimal health" },
                { title: "Advanced Diagnostic Testing", description: "In-depth analysis to uncover root causes of health issues" },
                { title: "Mind-Body Medicine", description: "Integrative approaches to mental and emotional well-being" },
                { title: "Detoxification Programs", description: "Tailored programs to support your body's natural detox processes" },
                { title: "Chronic Disease Management", description: "Holistic strategies for managing and reversing chronic conditions" },
              ].map((service, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="p-6 h-full bg-white border-green-100 hover:border-green-300 transition-colors">
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        <section ref={whyUsRef} className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <motion.h2
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-gray-900"
            >
              Why Choose Us
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                { title: "Experienced Team", description: "Our practitioners have years of experience in functional medicine" },
                { title: "Cutting-edge Treatments", description: "We stay up-to-date with the latest advancements in health and wellness" },
                { title: "Holistic Approach", description: "We address all aspects of your health for comprehensive care" },
                { title: "Personalized Care", description: "Every treatment plan is tailored to your unique needs and goals" },
                { title: "Ongoing Support", description: "We provide continuous guidance and support throughout your health journey" },
                { title: "Evidence-based Practice", description: "Our treatments are backed by scientific research and proven results" },
              ].map((reason, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="p-6 h-full bg-white border-green-100 hover:border-green-300 transition-colors">
                    <CheckIcon className="h-8 w-8 text-green-600 mb-2" />
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">{reason.title}</h3>
                    <p className="text-gray-600">{reason.description}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        <section ref={faqRef} className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <motion.h2
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-gray-900"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                { question: "What is functional medicine?", answer: "Functional medicine is a systems biology-based approach that focuses on identifying and addressing the root cause of disease." },
                { question: "How long does a typical treatment plan last?", answer: "Treatment plans vary based on individual needs, but typically range from 3 to 6 months for initial improvements." },
                { question: "Do you accept insurance?", answer: "We are out-of-network providers. We can provide you with a superbill to submit to your insurance for potential reimbursement." },
                { question: "What conditions do you treat?", answer: "We treat a wide range of chronic conditions including autoimmune diseases, hormonal imbalances, digestive disorders, and more." },
              ].map((faq, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="p-6 h-full bg-white border-green-100 hover:border-green-300 transition-colors">
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        <section ref={teamRef} className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <motion.h2
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-gray-900"
            >
              Meet Our Team
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                { name: "Dr. Adams Jeffrey Blanco", role: "Functional Medicine Practitioner", bio: "Dr. Johnson has over 10 years of experience in medicine and is passionate about helping patients achieve optimal health." },
                { name: "Lisa Chen", role: "Nutritionist", bio: "Lisa specializes in creating personalized nutrition plans that support overall health and wellness." },
                { name: "Michael Brown", role: "Health Coach", bio: "Michael works closely with patients to implement lifestyle changes and achieve their health goals." },
              ].map((member, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="p-6 h-full bg-white border-green-100 hover:border-green-300 transition-colors">
                    <UserIcon className="h-16 w-16 text-green-600 mb-4 mx-auto" />
                    <h3 className="text-lg font-semibold mb-1 text-gray-900 text-center">{member.name}</h3>
                    <p className="text-green-600 mb-2 text-center">{member.role}</p>
                    <p className="text-gray-600 text-center">{member.bio}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        <section ref={ctaRef} className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="space-y-2"
              >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                  Ready to Transform Your Health?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl">
                  Take the first step towards optimal wellness. Schedule your consultation today and start your journey to better health.
                </p>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <Button className="bg-green-600 text-white hover:bg-green-700" onClick={() => setIsModalOpen(true)}>
                  Book Your Consultation Now
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">© 2023 Optimized Health. All rights reserved.</p>
            <nav className="flex gap-4 mt-4 md:mt-0">
              <Link className="text-sm text-gray-600 hover:text-green-600 transition-colors" href="#">
                Terms of Service
              </Link>
              <Link className="text-sm text-gray-600 hover:text-green-600 transition-colors" href="#">
                Privacy Policy
              </Link>
            </nav>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-900">Book a Consultation</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <XIcon className="h-6 w-6" />
                </Button>
              </div>
              <form onSubmit={handleConsultationSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    className="mt-1" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Your email" 
                    className="mt-1" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="Your phone number" 
                    className="mt-1" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="How can we help you?"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
                <Button type="submit" className="w-full bg-green-600 text-white hover:bg-green-700">
                  Submit
                </Button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}