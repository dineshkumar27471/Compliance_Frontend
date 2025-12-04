"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Bell, Settings, HelpCircle, Sparkles, Menu, X, Upload, Eye, Trash2, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useRef } from "react"
import { useParams, useRouter } from "next/navigation"

export default function StatisticalQuestionsPage() {
  const params = useParams()
  const principleId = params.principleId as string
  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showUploadModal, setShowUploadModal] = useState(false)
  const [currentQuestionId, setCurrentQuestionId] = useState<number | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isDragging, setIsDragging] = useState(false)

  const [answers, setAnswers] = useState<Record<number, { compliance: string; comments: string }>>({})
  const [uploadedDocs, setUploadedDocs] = useState<Record<number, string>>({})

  const principleData: Record<string, { title: string; subtitle: string; totalQuestions: number; questions: any[] }> = {
    "0": {
      title: "National Statistical System Coordination",
      subtitle: "Please fill out the following form to assess your compliance status",
      totalQuestions: 10,
      questions: [
        {
          id: 1,
          text: "Has the organization documented operational policies for coordinating the national statistical system?",
        },
        {
          id: 2,
          text: "Does the organization have a formal governance structure for statistical coordination with clearly defined roles and responsibilities?",
        },
        {
          id: 3,
          text: "Are there established protocols for inter-agency statistical collaboration and data sharing across government entities?",
        },
        {
          id: 4,
          text: "Does the organization maintain a comprehensive register of all statistical activities across different agencies and departments?",
        },
        {
          id: 5,
          text: "Are statistical standards and methodologies consistently applied and documented across the national statistical system?",
        },
        {
          id: 6,
          text: "Has the organization implemented a quality assurance framework for coordinating statistical outputs?",
        },
        {
          id: 7,
          text: "Are there regular coordination meetings and communication channels established between statistical agencies?",
        },
        {
          id: 8,
          text: "Does the organization provide training and capacity building programs for statistical coordination personnel?",
        },
        {
          id: 9,
          text: "Is there a monitoring and evaluation system in place to assess the effectiveness of coordination efforts?",
        },
        {
          id: 10,
          text: "Has the organization established formal agreements or memoranda of understanding with other statistical agencies?",
        },
      ],
    },
    "1": {
      title: "Statistical Principle 1",
      subtitle: "Please fill out the following form to assess your compliance status",
      totalQuestions: 10,
      questions: [
        {
          id: 11,
          text: "Has the organization documented operational policies for coordinating the national statistical system?",
        },
        {
          id: 12,
          text: "Does the organization have a formal governance structure for statistical coordination with clearly defined roles and responsibilities?",
        },
        {
          id: 13,
          text: "Are there established protocols for inter-agency statistical collaboration and data sharing across government entities?",
        },
        {
          id: 14,
          text: "Does the organization maintain a comprehensive register of all statistical activities across different agencies and departments?",
        },
        {
          id: 15,
          text: "Are statistical standards and methodologies consistently applied and documented across the national statistical system?",
        },
        {
          id: 16,
          text: "Has the organization implemented a quality assurance framework for coordinating statistical outputs?",
        },
        {
          id: 17,
          text: "Are there regular coordination meetings and communication channels established between statistical agencies?",
        },
        {
          id: 18,
          text: "Does the organization provide training and capacity building programs for statistical coordination personnel?",
        },
        {
          id: 19,
          text: "Is there a monitoring and evaluation system in place to assess the effectiveness of coordination efforts?",
        },
        {
          id: 20,
          text: "Has the organization established formal agreements or memoranda of understanding with other statistical agencies?",
        },
      ],
    },
    "2": {
      title: "Statistical Principle 2",
      subtitle: "Please fill out the following form to assess your compliance status",
      totalQuestions: 10,
      questions: [
        {
          id: 21,
          text: "Has the organization documented operational policies for coordinating the national statistical system?",
        },
        {
          id: 22,
          text: "Does the organization have a formal governance structure for statistical coordination with clearly defined roles and responsibilities?",
        },
        {
          id: 23,
          text: "Are there established protocols for inter-agency statistical collaboration and data sharing across government entities?",
        },
        {
          id: 24,
          text: "Does the organization maintain a comprehensive register of all statistical activities across different agencies and departments?",
        },
        {
          id: 25,
          text: "Are statistical standards and methodologies consistently applied and documented across the national statistical system?",
        },
        {
          id: 26,
          text: "Has the organization implemented a quality assurance framework for coordinating statistical outputs?",
        },
        {
          id: 27,
          text: "Are there regular coordination meetings and communication channels established between statistical agencies?",
        },
        {
          id: 28,
          text: "Does the organization provide training and capacity building programs for statistical coordination personnel?",
        },
        {
          id: 29,
          text: "Is there a monitoring and evaluation system in place to assess the effectiveness of coordination efforts?",
        },
        {
          id: 30,
          text: "Has the organization established formal agreements or memoranda of understanding with other statistical agencies?",
        },
      ],
    },
    "3": {
      title: "Statistical Principle 3",
      subtitle: "Please fill out the following form to assess your compliance status",
      totalQuestions: 10,
      questions: [
        {
          id: 31,
          text: "Has the organization documented operational policies for coordinating the national statistical system?",
        },
        {
          id: 32,
          text: "Does the organization have a formal governance structure for statistical coordination with clearly defined roles and responsibilities?",
        },
        {
          id: 33,
          text: "Are there established protocols for inter-agency statistical collaboration and data sharing across government entities?",
        },
        {
          id: 34,
          text: "Does the organization maintain a comprehensive register of all statistical activities across different agencies and departments?",
        },
        {
          id: 35,
          text: "Are statistical standards and methodologies consistently applied and documented across the national statistical system?",
        },
        {
          id: 36,
          text: "Has the organization implemented a quality assurance framework for coordinating statistical outputs?",
        },
        {
          id: 37,
          text: "Are there regular coordination meetings and communication channels established between statistical agencies?",
        },
        {
          id: 38,
          text: "Does the organization provide training and capacity building programs for statistical coordination personnel?",
        },
        {
          id: 39,
          text: "Is there a monitoring and evaluation system in place to assess the effectiveness of coordination efforts?",
        },
        {
          id: 40,
          text: "Has the organization established formal agreements or memoranda of understanding with other statistical agencies?",
        },
      ],
    },
    "4": {
      title: "Statistical Principle 4",
      subtitle: "Please fill out the following form to assess your compliance status",
      totalQuestions: 10,
      questions: [
        {
          id: 41,
          text: "Has the organization documented operational policies for coordinating the national statistical system?",
        },
        {
          id: 42,
          text: "Does the organization have a formal governance structure for statistical coordination with clearly defined roles and responsibilities?",
        },
        {
          id: 43,
          text: "Are there established protocols for inter-agency statistical collaboration and data sharing across government entities?",
        },
        {
          id: 44,
          text: "Does the organization maintain a comprehensive register of all statistical activities across different agencies and departments?",
        },
        {
          id: 45,
          text: "Are statistical standards and methodologies consistently applied and documented across the national statistical system?",
        },
        {
          id: 46,
          text: "Has the organization implemented a quality assurance framework for coordinating statistical outputs?",
        },
        {
          id: 47,
          text: "Are there regular coordination meetings and communication channels established between statistical agencies?",
        },
        {
          id: 48,
          text: "Does the organization provide training and capacity building programs for statistical coordination personnel?",
        },
        {
          id: 49,
          text: "Is there a monitoring and evaluation system in place to assess the effectiveness of coordination efforts?",
        },
        {
          id: 50,
          text: "Has the organization established formal agreements or memoranda of understanding with other statistical agencies?",
        },
      ],
    },
    "5": {
      title: "Statistical Principle 5",
      subtitle: "Please fill out the following form to assess your compliance status",
      totalQuestions: 10,
      questions: [
        {
          id: 51,
          text: "Has the organization documented operational policies for coordinating the national statistical system?",
        },
        {
          id: 52,
          text: "Does the organization have a formal governance structure for statistical coordination with clearly defined roles and responsibilities?",
        },
        {
          id: 53,
          text: "Are there established protocols for inter-agency statistical collaboration and data sharing across government entities?",
        },
        {
          id: 54,
          text: "Does the organization maintain a comprehensive register of all statistical activities across different agencies and departments?",
        },
        {
          id: 55,
          text: "Are statistical standards and methodologies consistently applied and documented across the national statistical system?",
        },
        {
          id: 56,
          text: "Has the organization implemented a quality assurance framework for coordinating statistical outputs?",
        },
        {
          id: 57,
          text: "Are there regular coordination meetings and communication channels established between statistical agencies?",
        },
        {
          id: 58,
          text: "Does the organization provide training and capacity building programs for statistical coordination personnel?",
        },
        {
          id: 59,
          text: "Is there a monitoring and evaluation system in place to assess the effectiveness of coordination efforts?",
        },
        {
          id: 60,
          text: "Has the organization established formal agreements or memoranda of understanding with other statistical agencies?",
        },
      ],
    },
    "6": {
      title: "Statistical Principle 6",
      subtitle: "Please fill out the following form to assess your compliance status",
      totalQuestions: 10,
      questions: [
        {
          id: 61,
          text: "Has the organization documented operational policies for coordinating the national statistical system?",
        },
        {
          id: 62,
          text: "Does the organization have a formal governance structure for statistical coordination with clearly defined roles and responsibilities?",
        },
        {
          id: 63,
          text: "Are there established protocols for inter-agency statistical collaboration and data sharing across government entities?",
        },
        {
          id: 64,
          text: "Does the organization maintain a comprehensive register of all statistical activities across different agencies and departments?",
        },
        {
          id: 65,
          text: "Are statistical standards and methodologies consistently applied and documented across the national statistical system?",
        },
        {
          id: 66,
          text: "Has the organization implemented a quality assurance framework for coordinating statistical outputs?",
        },
        {
          id: 67,
          text: "Are there regular coordination meetings and communication channels established between statistical agencies?",
        },
        {
          id: 68,
          text: "Does the organization provide training and capacity building programs for statistical coordination personnel?",
        },
        {
          id: 69,
          text: "Is there a monitoring and evaluation system in place to assess the effectiveness of coordination efforts?",
        },
        {
          id: 70,
          text: "Has the organization established formal agreements or memoranda of understanding with other statistical agencies?",
        },
      ],
    },
    "7": {
      title: "Statistical Principle 7",
      subtitle: "Please fill out the following form to assess your compliance status",
      totalQuestions: 10,
      questions: [
        {
          id: 71,
          text: "Has the organization documented operational policies for coordinating the national statistical system?",
        },
        {
          id: 72,
          text: "Does the organization have a formal governance structure for statistical coordination with clearly defined roles and responsibilities?",
        },
        {
          id: 73,
          text: "Are there established protocols for inter-agency statistical collaboration and data sharing across government entities?",
        },
        {
          id: 74,
          text: "Does the organization maintain a comprehensive register of all statistical activities across different agencies and departments?",
        },
        {
          id: 75,
          text: "Are statistical standards and methodologies consistently applied and documented across the national statistical system?",
        },
        {
          id: 76,
          text: "Has the organization implemented a quality assurance framework for coordinating statistical outputs?",
        },
        {
          id: 77,
          text: "Are there regular coordination meetings and communication channels established between statistical agencies?",
        },
        {
          id: 78,
          text: "Does the organization provide training and capacity building programs for statistical coordination personnel?",
        },
        {
          id: 79,
          text: "Is there a monitoring and evaluation system in place to assess the effectiveness of coordination efforts?",
        },
        {
          id: 80,
          text: "Has the organization established formal agreements or memoranda of understanding with other statistical agencies?",
        },
      ],
    },
    "8": {
      title: "Statistical Principle 8",
      subtitle: "Please fill out the following form to assess your compliance status",
      totalQuestions: 10,
      questions: [
        {
          id: 81,
          text: "Has the organization documented operational policies for coordinating the national statistical system?",
        },
        {
          id: 82,
          text: "Does the organization have a formal governance structure for statistical coordination with clearly defined roles and responsibilities?",
        },
        {
          id: 83,
          text: "Are there established protocols for inter-agency statistical collaboration and data sharing across government entities?",
        },
        {
          id: 84,
          text: "Does the organization maintain a comprehensive register of all statistical activities across different agencies and departments?",
        },
        {
          id: 85,
          text: "Are statistical standards and methodologies consistently applied and documented across the national statistical system?",
        },
        {
          id: 86,
          text: "Has the organization implemented a quality assurance framework for coordinating statistical outputs?",
        },
        {
          id: 87,
          text: "Are there regular coordination meetings and communication channels established between statistical agencies?",
        },
        {
          id: 88,
          text: "Does the organization provide training and capacity building programs for statistical coordination personnel?",
        },
        {
          id: 89,
          text: "Is there a monitoring and evaluation system in place to assess the effectiveness of coordination efforts?",
        },
        {
          id: 90,
          text: "Has the organization established formal agreements or memoranda of understanding with other statistical agencies?",
        },
      ],
    },
    "9": {
      title: "Statistical Principle 9",
      subtitle: "Please fill out the following form to assess your compliance status",
      totalQuestions: 10,
      questions: [
        {
          id: 91,
          text: "Has the organization documented operational policies for coordinating the national statistical system?",
        },
        {
          id: 92,
          text: "Does the organization have a formal governance structure for statistical coordination with clearly defined roles and responsibilities?",
        },
        {
          id: 93,
          text: "Are there established protocols for inter-agency statistical collaboration and data sharing across government entities?",
        },
        {
          id: 94,
          text: "Does the organization maintain a comprehensive register of all statistical activities across different agencies and departments?",
        },
        {
          id: 95,
          text: "Are statistical standards and methodologies consistently applied and documented across the national statistical system?",
        },
        {
          id: 96,
          text: "Has the organization implemented a quality assurance framework for coordinating statistical outputs?",
        },
        {
          id: 97,
          text: "Are there regular coordination meetings and communication channels established between statistical agencies?",
        },
        {
          id: 98,
          text: "Does the organization provide training and capacity building programs for statistical coordination personnel?",
        },
        {
          id: 99,
          text: "Is there a monitoring and evaluation system in place to assess the effectiveness of coordination efforts?",
        },
        {
          id: 100,
          text: "Has the organization established formal agreements or memoranda of understanding with other statistical agencies?",
        },
      ],
    },
    "10": {
      title: "Statistical Principle 10",
      subtitle: "Please fill out the following form to assess your compliance status",
      totalQuestions: 10,
      questions: [
        {
          id: 101,
          text: "Has the organization documented operational policies for coordinating the national statistical system?",
        },
        {
          id: 102,
          text: "Does the organization have a formal governance structure for statistical coordination with clearly defined roles and responsibilities?",
        },
        {
          id: 103,
          text: "Are there established protocols for inter-agency statistical collaboration and data sharing across government entities?",
        },
        {
          id: 104,
          text: "Does the organization maintain a comprehensive register of all statistical activities across different agencies and departments?",
        },
        {
          id: 105,
          text: "Are statistical standards and methodologies consistently applied and documented across the national statistical system?",
        },
        {
          id: 106,
          text: "Has the organization implemented a quality assurance framework for coordinating statistical outputs?",
        },
        {
          id: 107,
          text: "Are there regular coordination meetings and communication channels established between statistical agencies?",
        },
        {
          id: 108,
          text: "Does the organization provide training and capacity building programs for statistical coordination personnel?",
        },
        {
          id: 109,
          text: "Is there a monitoring and evaluation system in place to assess the effectiveness of coordination efforts?",
        },
        {
          id: 110,
          text: "Has the organization established formal agreements or memoranda of understanding with other statistical agencies?",
        },
      ],
    },
    "11": {
      title: "Statistical Principle 11",
      subtitle: "Please fill out the following form to assess your compliance status",
      totalQuestions: 10,
      questions: [
        {
          id: 111,
          text: "Has the organization documented operational policies for coordinating the national statistical system?",
        },
        {
          id: 112,
          text: "Does the organization have a formal governance structure for statistical coordination with clearly defined roles and responsibilities?",
        },
        {
          id: 113,
          text: "Are there established protocols for inter-agency statistical collaboration and data sharing across government entities?",
        },
        {
          id: 114,
          text: "Does the organization maintain a comprehensive register of all statistical activities across different agencies and departments?",
        },
        {
          id: 115,
          text: "Are statistical standards and methodologies consistently applied and documented across the national statistical system?",
        },
        {
          id: 116,
          text: "Has the organization implemented a quality assurance framework for coordinating statistical outputs?",
        },
        {
          id: 117,
          text: "Are there regular coordination meetings and communication channels established between statistical agencies?",
        },
        {
          id: 118,
          text: "Does the organization provide training and capacity building programs for statistical coordination personnel?",
        },
        {
          id: 119,
          text: "Is there a monitoring and evaluation system in place to assess the effectiveness of coordination efforts?",
        },
        {
          id: 120,
          text: "Has the organization established formal agreements or memoranda of understanding with other statistical agencies?",
        },
      ],
    },
    "12": {
      title: "Statistical Principle 12",
      subtitle: "Please fill out the following form to assess your compliance status",
      totalQuestions: 10,
      questions: [
        {
          id: 121,
          text: "Has the organization documented operational policies for coordinating the national statistical system?",
        },
        {
          id: 122,
          text: "Does the organization have a formal governance structure for statistical coordination with clearly defined roles and responsibilities?",
        },
        {
          id: 123,
          text: "Are there established protocols for inter-agency statistical collaboration and data sharing across government entities?",
        },
        {
          id: 124,
          text: "Does the organization maintain a comprehensive register of all statistical activities across different agencies and departments?",
        },
        {
          id: 125,
          text: "Are statistical standards and methodologies consistently applied and documented across the national statistical system?",
        },
        {
          id: 126,
          text: "Has the organization implemented a quality assurance framework for coordinating statistical outputs?",
        },
        {
          id: 127,
          text: "Are there regular coordination meetings and communication channels established between statistical agencies?",
        },
        {
          id: 128,
          text: "Does the organization provide training and capacity building programs for statistical coordination personnel?",
        },
        {
          id: 129,
          text: "Is there a monitoring and evaluation system in place to assess the effectiveness of coordination efforts?",
        },
        {
          id: 130,
          text: "Has the organization established formal agreements or memoranda of understanding with other statistical agencies?",
        },
      ],
    },
    "13": {
      title: "Statistical Principle 13",
      subtitle: "Please fill out the following form to assess your compliance status",
      totalQuestions: 10,
      questions: [
        {
          id: 131,
          text: "Has the organization documented operational policies for coordinating the national statistical system?",
        },
        {
          id: 132,
          text: "Does the organization have a formal governance structure for statistical coordination with clearly defined roles and responsibilities?",
        },
        {
          id: 133,
          text: "Are there established protocols for inter-agency statistical collaboration and data sharing across government entities?",
        },
        {
          id: 134,
          text: "Does the organization maintain a comprehensive register of all statistical activities across different agencies and departments?",
        },
        {
          id: 135,
          text: "Are statistical standards and methodologies consistently applied and documented across the national statistical system?",
        },
        {
          id: 136,
          text: "Has the organization implemented a quality assurance framework for coordinating statistical outputs?",
        },
        {
          id: 137,
          text: "Are there regular coordination meetings and communication channels established between statistical agencies?",
        },
        {
          id: 138,
          text: "Does the organization provide training and capacity building programs for statistical coordination personnel?",
        },
        {
          id: 139,
          text: "Is there a monitoring and evaluation system in place to assess the effectiveness of coordination efforts?",
        },
        {
          id: 140,
          text: "Has the organization established formal agreements or memoranda of understanding with other statistical agencies?",
        },
      ],
    },
    "14": {
      title: "Statistical Principle 14",
      subtitle: "Please fill out the following form to assess your compliance status",
      totalQuestions: 10,
      questions: [
        {
          id: 141,
          text: "Has the organization documented operational policies for coordinating the national statistical system?",
        },
        {
          id: 142,
          text: "Does the organization have a formal governance structure for statistical coordination with clearly defined roles and responsibilities?",
        },
        {
          id: 143,
          text: "Are there established protocols for inter-agency statistical collaboration and data sharing across government entities?",
        },
        {
          id: 144,
          text: "Does the organization maintain a comprehensive register of all statistical activities across different agencies and departments?",
        },
        {
          id: 145,
          text: "Are statistical standards and methodologies consistently applied and documented across the national statistical system?",
        },
        {
          id: 146,
          text: "Has the organization implemented a quality assurance framework for coordinating statistical outputs?",
        },
        {
          id: 147,
          text: "Are there regular coordination meetings and communication channels established between statistical agencies?",
        },
        {
          id: 148,
          text: "Does the organization provide training and capacity building programs for statistical coordination personnel?",
        },
        {
          id: 149,
          text: "Is there a monitoring and evaluation system in place to assess the effectiveness of coordination efforts?",
        },
        {
          id: 150,
          text: "Has the organization established formal agreements or memoranda of understanding with other statistical agencies?",
        },
      ],
    },
    "15": {
      title: "Statistical Principle 15",
      subtitle: "Please fill out the following form to assess your compliance status",
      totalQuestions: 10,
      questions: [
        {
          id: 151,
          text: "Has the organization documented operational policies for coordinating the national statistical system?",
        },
        {
          id: 152,
          text: "Does the organization have a formal governance structure for statistical coordination with clearly defined roles and responsibilities?",
        },
        {
          id: 153,
          text: "Are there established protocols for inter-agency statistical collaboration and data sharing across government entities?",
        },
        {
          id: 154,
          text: "Does the organization maintain a comprehensive register of all statistical activities across different agencies and departments?",
        },
        {
          id: 155,
          text: "Are statistical standards and methodologies consistently applied and documented across the national statistical system?",
        },
        {
          id: 156,
          text: "Has the organization implemented a quality assurance framework for coordinating statistical outputs?",
        },
        {
          id: 157,
          text: "Are there regular coordination meetings and communication channels established between statistical agencies?",
        },
        {
          id: 158,
          text: "Does the organization provide training and capacity building programs for statistical coordination personnel?",
        },
        {
          id: 159,
          text: "Is there a monitoring and evaluation system in place to assess the effectiveness of coordination efforts?",
        },
        {
          id: 160,
          text: "Has the organization established formal agreements or memoranda of understanding with other statistical agencies?",
        },
      ],
    },
    "16": {
      title: "Statistical Principle 16",
      subtitle: "Please fill out the following form to assess your compliance status",
      totalQuestions: 10,
      questions: [
        {
          id: 161,
          text: "Has the organization documented operational policies for coordinating the national statistical system?",
        },
        {
          id: 162,
          text: "Does the organization have a formal governance structure for statistical coordination with clearly defined roles and responsibilities?",
        },
        {
          id: 163,
          text: "Are there established protocols for inter-agency statistical collaboration and data sharing across government entities?",
        },
        {
          id: 164,
          text: "Does the organization maintain a comprehensive register of all statistical activities across different agencies and departments?",
        },
        {
          id: 165,
          text: "Are statistical standards and methodologies consistently applied and documented across the national statistical system?",
        },
        {
          id: 166,
          text: "Has the organization implemented a quality assurance framework for coordinating statistical outputs?",
        },
        {
          id: 167,
          text: "Are there regular coordination meetings and communication channels established between statistical agencies?",
        },
        {
          id: 168,
          text: "Does the organization provide training and capacity building programs for statistical coordination personnel?",
        },
        {
          id: 169,
          text: "Is there a monitoring and evaluation system in place to assess the effectiveness of coordination efforts?",
        },
        {
          id: 170,
          text: "Has the organization established formal agreements or memoranda of understanding with other statistical agencies?",
        },
      ],
    },
    "17": {
      title: "Statistical Principle 17",
      subtitle: "Please fill out the following form to assess your compliance status",
      totalQuestions: 10,
      questions: [
        {
          id: 171,
          text: "Has the organization documented operational policies for coordinating the national statistical system?",
        },
        {
          id: 172,
          text: "Does the organization have a formal governance structure for statistical coordination with clearly defined roles and responsibilities?",
        },
        {
          id: 173,
          text: "Are there established protocols for inter-agency statistical collaboration and data sharing across government entities?",
        },
        {
          id: 174,
          text: "Does the organization maintain a comprehensive register of all statistical activities across different agencies and departments?",
        },
        {
          id: 175,
          text: "Are statistical standards and methodologies consistently applied and documented across the national statistical system?",
        },
        {
          id: 176,
          text: "Has the organization implemented a quality assurance framework for coordinating statistical outputs?",
        },
        {
          id: 177,
          text: "Are there regular coordination meetings and communication channels established between statistical agencies?",
        },
        {
          id: 178,
          text: "Does the organization provide training and capacity building programs for statistical coordination personnel?",
        },
        {
          id: 179,
          text: "Is there a monitoring and evaluation system in place to assess the effectiveness of coordination efforts?",
        },
        {
          id: 180,
          text: "Has the organization established formal agreements or memoranda of understanding with other statistical agencies?",
        },
      ],
    },
    "18": {
      title: "Statistical Principle 18 - Final Principle",
      subtitle: "This is the last principle - Please complete all questions",
      totalQuestions: 10,
      questions: [
        {
          id: 181,
          text: "Has the organization documented operational policies for coordinating the national statistical system?",
        },
        {
          id: 182,
          text: "Does the organization have a formal governance structure for statistical coordination with clearly defined roles and responsibilities?",
        },
        {
          id: 183,
          text: "Are there established protocols for inter-agency statistical collaboration and data sharing across government entities?",
        },
        {
          id: 184,
          text: "Does the organization maintain a comprehensive register of all statistical activities across different agencies and departments?",
        },
        {
          id: 185,
          text: "Are statistical standards and methodologies consistently applied and documented across the national statistical system?",
        },
        {
          id: 186,
          text: "Has the organization implemented a quality assurance framework for coordinating statistical outputs?",
        },
        {
          id: 187,
          text: "Are there regular coordination meetings and communication channels established between statistical agencies?",
        },
        {
          id: 188,
          text: "Does the organization provide training and capacity building programs for statistical coordination personnel?",
        },
        {
          id: 189,
          text: "Is there a monitoring and evaluation system in place to assess the effectiveness of coordination efforts?",
        },
        {
          id: 190,
          text: "Has the organization established formal agreements or memoranda of understanding with other statistical agencies?",
        },
      ],
    },
  }

  const principle = principleData[principleId] || principleData["0"]
  const totalQuestions = principle.totalQuestions
  const answeredQuestions = Object.keys(answers).filter((key) => answers[Number.parseInt(key)].compliance).length
  const progress = Math.round((answeredQuestions / totalQuestions) * 100)

  const isLastPrinciple = principleId === "18"

  const handleSubmit = () => {
    router.push("/statistical-submission-success")
  }

  const handleNext = () => {
    const currentId = Number.parseInt(principleId)
    const nextId = currentId + 1
    if (nextId <= 18) {
      router.push(`/statistical-questions/${nextId}`)
    }
  }

  const handleComplianceChange = (questionId: number, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: {
        compliance: value,
        comments: prev[questionId]?.comments || "",
      },
    }))
  }

  const handleCommentsChange = (questionId: number, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: {
        compliance: prev[questionId]?.compliance || "",
        comments: value,
      },
    }))
  }

  const handleUploadClick = (questionId: number) => {
    setCurrentQuestionId(questionId)
    setShowUploadModal(true)
    setSelectedFile(null)
  }

  const handleFileSelect = (file: File) => {
    if (file.type === "application/pdf" && file.size <= 50 * 1024 * 1024) {
      setSelectedFile(file)
    } else {
      alert("Please select a PDF file under 50MB")
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files[0]
    if (file) handleFileSelect(file)
  }

  const handleUploadFile = () => {
    if (selectedFile && currentQuestionId !== null) {
      setUploadedDocs((prev) => ({
        ...prev,
        [currentQuestionId]: selectedFile.name,
      }))
      setShowUploadModal(false)
      setSelectedFile(null)
      setCurrentQuestionId(null)
    }
  }

  const handleDeleteDoc = (questionId: number) => {
    setUploadedDocs((prev) => {
      const newDocs = { ...prev }
      delete newDocs[questionId]
      return newDocs
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <nav className="bg-gradient-to-r from-[#1F090D] to-[#330818] px-4 sm:px-6 lg:px-8 py-4 border-b border-white/10">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="w-6 h-6 bg-[#7A0026] rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm font-[family-name:var(--font-lusail)]">D</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-white font-bold text-xs leading-tight font-[family-name:var(--font-lusail)]">
                DATA REGULATIONS,
              </div>
              <div className="text-white text-[10px] leading-tight opacity-90">COMPLIANCE AND STATISTICS</div>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <Link href="/home" className="text-white text-sm hover:text-white/80 transition-colors">
              Compliance Assessment
            </Link>
            <Link
              href="/statistical-assessment"
              className="text-white text-sm font-semibold hover:text-white/80 transition-colors"
            >
              Statistical Assessment
            </Link>
            <Link href="/dashboard" className="text-white text-sm hover:text-white/80 transition-colors">
              Dashboard
            </Link>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
            </button>

            <button className="flex items-center gap-2 px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-white text-sm hidden sm:inline">Ask Bayan</span>
            </button>
            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
              <Settings className="w-5 h-5 text-white" />
            </button>
            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors hidden sm:block">
              <HelpCircle className="w-5 h-5 text-white" />
            </button>
            <button className="relative p-2 hover:bg-white/10 rounded-lg transition-colors">
              <Bell className="w-5 h-5 text-white" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/20 hover:border-white/40 transition-colors flex-shrink-0">
              <Image
                src="/placeholder-user.png"
                alt="User avatar"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-white/10">
            <div className="flex flex-col gap-3">
              <Link
                href="/home"
                className="text-white text-sm hover:text-white/80 transition-colors py-2 px-3 rounded-lg hover:bg-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                Compliance Assessment
              </Link>
              <Link
                href="/statistical-assessment"
                className="text-white text-sm hover:text-white/80 transition-colors py-2 px-3 rounded-lg hover:bg-white/10 border-l-2 border-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Statistical Assessment
              </Link>
              <Link
                href="/dashboard"
                className="text-white text-sm hover:text-white/80 transition-colors py-2 px-3 rounded-lg hover:bg-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
            </div>
          </div>
        )}
      </nav>

      <div className="bg-gradient-to-r from-[#3B071B] to-[#250511] px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="text-white text-xl sm:text-2xl font-bold font-[family-name:var(--font-lusail)] mb-2 break-words">
                Statistical Assessment
              </h1>
              <h2 className="text-white/90 text-sm sm:text-base font-[family-name:var(--font-lusail)] mb-1 break-words">
                {principle.title}
              </h2>
              <p className="text-white/70 text-xs sm:text-sm break-words">
                {principle.subtitle} ({principle.totalQuestions} Questions)
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
              <Link href="/statistical-principles" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white/10"
                >
                  Principles List
                </Button>
              </Link>
              {isLastPrinciple ? (
                <Button className="w-full sm:w-auto bg-[#7A0026] hover:bg-[#5A001E] text-white" onClick={handleSubmit}>
                  Submit
                </Button>
              ) : (
                <Button className="w-full sm:w-auto bg-[#7A0026] hover:bg-[#5A001E] text-white" onClick={handleNext}>
                  Next
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="px-4 sm:px-6 lg:px-8 py-4 sm:py-4 max-w-5xl mx-auto ">
        <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-5 shadow-sm mb-4 sm:mb-6">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-gray-900 font-semibold text-sm sm:text-base font-[family-name:var(--font-lusail)]">
                Saved
              </span>
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
            </div>
            <span className="text-xs sm:text-sm font-semibold text-gray-700">{progress}%</span>
          </div>
          <div className="h-2 sm:h-3 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-[#63DE77] transition-all duration-300" style={{ width: `${progress}%` }}></div>
          </div>
        </div>

        <div className="space-y-4 sm:space-y-5 mb-6">
          {principle.questions.map((question) => (
            <div key={question.id} className="bg-white border border-gray-300 rounded-xl p-4 sm:p-6 lg:p-7 shadow-sm">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-md bg-[#8A1538] text-white flex items-center justify-center text-sm font-bold font-[family-name:var(--font-lusail)]">
                    {question.id}
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-gray-900 text-sm sm:text-base mb-4 sm:mb-5 leading-relaxed font-[family-name:var(--font-lusail)] break-words">
                    {question.text}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 mb-4 sm:mb-5">
                    <label className="flex items-center gap-2 cursor-pointer p-2 sm:p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      <input
                        type="radio"
                        name={`question-${question.id}`}
                        value="full"
                        checked={answers[question.id]?.compliance === "full"}
                        onChange={(e) => handleComplianceChange(question.id, e.target.value)}
                        className="w-4 h-4 text-green-600 focus:ring-green-500 flex-shrink-0"
                      />
                      <span className="text-xs sm:text-sm text-gray-700 break-words">Full Compliance</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer p-2 sm:p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      <input
                        type="radio"
                        name={`question-${question.id}`}
                        value="partial"
                        checked={answers[question.id]?.compliance === "partial"}
                        onChange={(e) => handleComplianceChange(question.id, e.target.value)}
                        className="w-4 h-4 text-yellow-600 focus:ring-yellow-500 flex-shrink-0"
                      />
                      <span className="text-xs sm:text-sm text-gray-700 break-words">Partial Compliance</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer p-2 sm:p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      <input
                        type="radio"
                        name={`question-${question.id}`}
                        value="non"
                        checked={answers[question.id]?.compliance === "non"}
                        onChange={(e) => handleComplianceChange(question.id, e.target.value)}
                        className="w-4 h-4 text-red-600 focus:ring-red-500 flex-shrink-0"
                      />
                      <span className="text-xs sm:text-sm text-gray-700 break-words">Non Compliant</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer p-2 sm:p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      <input
                        type="radio"
                        name={`question-${question.id}`}
                        value="not-assessed"
                        checked={answers[question.id]?.compliance === "not-assessed"}
                        onChange={(e) => handleComplianceChange(question.id, e.target.value)}
                        className="w-4 h-4 text-gray-600 focus:ring-gray-500 flex-shrink-0"
                      />
                      <span className="text-xs sm:text-sm text-gray-700 break-words">Not assessed</span>
                    </label>
                  </div>

                  <div className="mb-4 sm:mb-5">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                      Specify Strengths, Weaknesses, Other Comments *
                    </label>
                    <Textarea
                      value={answers[question.id]?.comments || ""}
                      onChange={(e) => handleCommentsChange(question.id, e.target.value)}
                      placeholder="Enter your comments here..."
                      rows={4}
                      className="w-full resize-none border-gray-300 focus:ring-2 focus:ring-[#7A0026] focus:border-transparent text-sm"
                    />
                    <div className="mt-3 p-2 sm:p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <p className="text-xs text-gray-600 leading-relaxed break-words">
                        <strong>Sample:</strong> The organization has established comprehensive coordination mechanisms
                        including regular inter-agency meetings, shared data platforms, and standardized reporting
                        frameworks. However, some smaller agencies still face challenges in adopting unified statistical
                        methodologies.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs sm:text-sm font-medium text-gray-700">Upload Supporting Document</p>
                    {uploadedDocs[question.id] ? (
                      <div className="flex items-center gap-2 p-2 sm:p-3 bg-gray-50 rounded-lg border border-gray-200">
                        <div className="flex-1 flex items-center gap-2 min-w-0">
                          <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#7A0026] rounded flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-xs font-bold">PDF</span>
                          </div>
                          <span className="text-xs sm:text-sm text-gray-700 truncate">{uploadedDocs[question.id]}</span>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex items-center gap-1 flex-shrink-0 text-xs sm:text-sm bg-transparent"
                        >
                          <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span className="hidden sm:inline">View</span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDeleteDoc(question.id)}
                          className="flex-shrink-0"
                        >
                          <Trash2 className="w-3 h-3 sm:w-4 sm:h-4 text-red-600" />
                        </Button>
                      </div>
                    ) : (
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full sm:w-auto flex items-center justify-center gap-2 border-[#7A0026] text-[#7A0026] hover:bg-[#7A0026]/10 text-xs sm:text-sm bg-transparent"
                        onClick={() => handleUploadClick(question.id)}
                      >
                        <Upload className="w-3 h-3 sm:w-4 sm:h-4" />
                        Upload Document
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-stretch sm:justify-end mb-8">
          {isLastPrinciple ? (
            <Button
              className="w-full sm:w-auto bg-[#7A0026] hover:bg-[#5A001E] text-white px-6 sm:px-8"
              onClick={handleSubmit}
            >
              Submit Assessment
            </Button>
          ) : (
            <Button
              className="w-full sm:w-auto bg-[#7A0026] hover:bg-[#5A001E] text-white px-6 sm:px-8"
              onClick={handleNext}
            >
              Save and Continue
            </Button>
          )}
        </div>

        {/* Footer */}
        <footer className="mt-8 sm:mt-12 pb-6 sm:pb-8 text-center">
          <div className="text-gray-900 text-base sm:text-lg font-[family-name:var(--font-lusail)]">IQNS CE ANI</div>
        </footer>
      </main>

      {showUploadModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-4 sm:p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 font-[family-name:var(--font-lusail)] break-words">
                Upload File
              </h3>
              <button
                onClick={() => {
                  setShowUploadModal(false)
                  setSelectedFile(null)
                }}
                className="text-gray-400 hover:text-gray-600 flex-shrink-0 ml-2"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs sm:text-sm text-gray-600 mb-4 break-words">Choose file and upload to system</p>

            <div
              className={`border-2 border-dashed rounded-lg p-6 sm:p-8 text-center mb-4 transition-colors ${
                isDragging ? "border-[#7A0026] bg-[#7A0026]/5" : "border-gray-300 bg-gray-50"
              }`}
              onDrop={handleDrop}
              onDragOver={(e) => {
                e.preventDefault()
                setIsDragging(true)
              }}
              onDragLeave={() => setIsDragging(false)}
            >
              <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#7A0026] rounded-lg flex items-center justify-center">
                  <Upload className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <p className="text-xs sm:text-sm text-gray-600 break-words">Drop your PDFs or just uploading</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-[#7A0026] text-[#7A0026] hover:bg-[#7A0026]/10 text-xs sm:text-sm bg-transparent"
                  onClick={() => fileInputRef.current?.click()}
                >
                  Browse file
                </Button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0]
                    if (file) handleFileSelect(file)
                  }}
                />
              </div>
            </div>

            <p className="text-xs text-gray-500 mb-4 break-words">
              Only PDF accepted. File size should be less than 50MB
            </p>

            {selectedFile && (
              <div className="mb-4 p-2 sm:p-3 bg-yellow-50 rounded-lg flex items-center gap-2 sm:gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-yellow-400 rounded flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold">PDF</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm text-gray-900 truncate">{selectedFile.name}</p>
                  <p className="text-xs text-gray-500">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
                <button
                  onClick={() => setSelectedFile(null)}
                  className="text-gray-400 hover:text-gray-600 flex-shrink-0"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <Button
                variant="outline"
                className="flex-1 text-xs sm:text-sm bg-transparent"
                onClick={() => {
                  setShowUploadModal(false)
                  setSelectedFile(null)
                }}
              >
                Cancel
              </Button>
              <Button
                className="flex-1 bg-[#7A0026] hover:bg-[#5A001E] text-white text-xs sm:text-sm"
                onClick={handleUploadFile}
                disabled={!selectedFile}
              >
                Upload File
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
