import React from "react";
import "./QuestionsFAQ.css";
import { BarFAQ} from "./BarFAQ";

export function QuestionsFAQ() {
    const questionTitles = [
        "What are the best tips for finding budget-friendly travel accommodations?",
        "How can I find authentic local experiences when traveling?",
        "What should I pack for a long-term trip or backpacking adventure?",
        "What are some strategies for overcoming jet lag when traveling across time zones?",
        "What are the visa requirements for popular tourist destinations?",
    ];

    return (
        <div className="questions">
            <div className="questions-wrapper">
                {questionTitles.map((title, index) => (
                    <BarFAQ
                        key={index}
                        q_number={String(index + 1).padStart(2, "0")}
                        q_title={title}
                    />
                ))}
            </div>
        </div>
    );
};

