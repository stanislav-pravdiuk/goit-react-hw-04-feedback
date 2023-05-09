import { useState } from "react";
import FeedbackOptions from "components/fedback-options/FeedbackOptions";
import Statistics from "../statistics/Statistics";
import Section from "../section/Section";
import Notification from "components/notification/Notification";
import btns from './buttons.json'

function Feedback() {

    let [good, setGood] = useState(0);
    let [neutral, setNeutral] = useState(0);
    let [bad, setBad] = useState(0);
    let total = good + neutral + bad;
    let positiveFeedback = Math.round(good * 100 / total)

    function handleLeaveFeedback(event) {

        switch (event.target.name) {
            case 'good':
                setGood(good + 1);
                break;
            
            case 'neutral':
                setNeutral(neutral + 1);
                break;
            
            case 'bad':
                setBad(bad + 1);
                break;
            
            default:
                return;
        };
    };

    return (
            <div className="feedback">
                
                <Section title=''>
                    <FeedbackOptions
                        onLeaveFeedback={handleLeaveFeedback}
                        options={btns.buttons}
                    />
                </Section>
                
                <Section title="Statistics">
                    {total !== 0
                        ? (
                            <Statistics
                                good={good}
                                neutral={neutral}
                                bad={bad}
                                total={total}
                                positivePercentage={positiveFeedback}
                            />
                        )
                    
                        : (<Notification message="There is no feedback" />)}
                </Section>

            </div>
        )
};

export default Feedback;