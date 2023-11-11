import React, { useState } from "react";
import "./BarFAQ.css";
import plus from "./img/UnionPlus.svg";
import x_mark from "./img/Union.svg";

export function BarFAQ({ q_number, q_title }){
    const [xMark, setXmark] = useState(false);
    const [showAnswer, setShowAnswer] = useState(false);
    const clickHandler = () => {
        setXmark(!xMark);
        setShowAnswer(!showAnswer);
    };
    return (
        <div className="question">
            <span className="q-number">{q_number}</span>
            <div className="question-inner">
                <h2 className="q-title">{q_title}</h2>

                <div className={`q-answer ${showAnswer ? "show" : "hide"}`}>
                    <p>
                        To discover budget-friendly accommodations, consider the
                        following tips: Book in Advance: Reserving your
                        accommodations well in advance often results in better
                        deals. Comparison Sites: Utilize travel comparison
                        websites to find competitive prices from various
                        providers. Off-Peak Travel: Consider traveling during
                        off-peak seasons for reduced rates. Hostels and
                        Guesthouses: These can be more economical than hotels,
                        especially for solo travelers. Rewards Programs: Sign up
                        for loyalty programs to accumulate points and receive
                        discounts. Local Recommendations: Seek advice from
                        locals or fellow travelers for hidden gems that are easy
                        on the wallet.
                    </p>
                </div>
            </div>
            <button
                className={xMark ? "purple-btn" : ""}
                onClick={clickHandler}
                type="button"
            >
                <img src={xMark ? x_mark : plus} alt="icon" />
            </button>
        </div>
    );
};

