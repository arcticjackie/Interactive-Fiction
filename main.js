const messageElement = document.getElementById('message')
const optionButtonsElement = document.getElementById('option-buttons')

var procrastinationCount = 0;
var totalSteps = 0;

function startGame() {
    showMessage(0)
}

function playAudio(num) {
    if (num === 0) {
        document.getElementById("clapping").play()
    }
    if (num === 1) {
        document.getElementById("aw").play()
    }
    if (num ===2) {
        document.getElementById("woohoo").play()
    }

}

function showMessage(textNodeIndex) {
    console.log("Procrastination Count: " + retrieveProcrastinationCount())
    console.log("Total Steps Taken: " + retrieveTotalSteps())

    if (textNodeIndex < 21) {
        const visibleText = messages.find(textNode => textNode.id === textNodeIndex)
        messageElement.innerHTML = visibleText.message;
        console.log(messageElement.innerHTML)


        while (optionButtonsElement.firstChild) {
            optionButtonsElement.removeChild(optionButtonsElement.firstChild)
        }

        visibleText.options.forEach(option => {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)

        })
    }
    else {
        const visibleText = messages.find(textNode => textNode.id === textNodeIndex)
        messageElement.innerHTML = `You spent ${retrieveProcrastinationCount()} out of ${retrieveTotalSteps()} of your decisions procrastinating / being lazy.`,
        console.log(messageElement.innerHTML)

        while (optionButtonsElement.firstChild) {
            optionButtonsElement.removeChild(optionButtonsElement.firstChild)
        }

        visibleText.options.forEach(option => {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)

        })
    }
}


function selectOption(option) {
    const nextMessageID = option.nextMessageID
    if (nextMessageID === -1) {
        playAudio(2)

        procrastinationCount = 0,
            totalSteps = 0

        return startGame()
    }
    else if (nextMessageID === -2) {
        window.close()
    }
    // if it is an odd, add it to the procrastination count
    else if (nextMessageID % 2 === 1 && nextMessageID > 0) {
        procrastinationCount++;
        playAudio(1)
        // procrastinationCount.set(procrastinationCount++)
    }
    else {
        playAudio(0)
    }
    totalSteps++
    // state = Object.assign(state, option.setState)

    showMessage(nextMessageID)
}

function retrieveProcrastinationCount() {
    return procrastinationCount;
}
function retrieveTotalSteps() {
    return totalSteps;
}

// odd options are procrastination options
// even options are productive options
const messages = [
    {
        id: 0,
        message: 'You wake up in your room after a restful night’s sleep. You then:',
        options: [
            {
                text: 'Check Instagram',
                nextMessageID: 1
            },
            {
                text: 'Get up and get ready',
                nextMessageID: 2
            }
        ]
    },
    {
        id: 1,
        message: 'You didn’t know how much time had passed until you happened to ' +
            'see the time and realized that you wasted 2 hours on social media, ' +
            'feeling worse than how you started. You:',
        options: [
            {
                text: 'Continue to go on social media',
                // nextMessageID: 3
                nextMessageID: 5
            },
            {
                text: 'Get up and get ready',
                nextMessageID: 4
            }
        ]
    },
    {
        id: 2,
        message: 'You walk to the bathroom and brush your teeth, use the toilet, and wash your face. ' +
            'You leave the bathroom to: ',
        options: [
            {
                text: 'Go to your room and go on TikTok',
                nextMessageID: 5
            },
            {
                text: 'Go to the kitchen and make breakfast',
                nextMessageID: 6
            }
        ]
    },
    {
        id: 4,
        message: 'You walk to the bathroom and brush your teeth, use the toilet, and wash your face. ' +
            'You leave the bathroom to You wake up in your room after a restful night’s sleep. You then:',
        options: [
            {
                text: 'Go to your room and go on TikTok',
                nextMessageID: 5
            },
            {
                text: 'Go to the kitchen and make breakfast',
                nextMessageID: 6
            }
        ]
    },
    {
        id: 5,
        message: 'You spend around 1 hour on TikTok and immediately realize you are starving, ' +
            'so you grab a protein shake as you don’t have time to make breakfast. As you drink your shake, you:',
        options: [
            {
                text: 'Continue to be unproductive',
                nextMessageID: 7
            },
            {
                text: 'Jump right into your tasks for today and set aside your phone while working',
                nextMessageID: 8
            }
        ]
    },
    {
        id: 6,
        message: 'You make a delicious, nutritious breakfast consisting of proteins, fruits, and ' +
            'toast with a cup of coffee to prepare for a productive day! You:',
        options: [
            {
                text: 'Feel that since you were so productive so far, you deserve to check your phone for a quick second',
                nextMessageID: 9
            },
            {
                text: 'Jump right into your tasks for today and set aside your phone while working',
                nextMessageID: 10
            }
        ]
    },
    {
        id: 7,
        message: 'You feel that since you already started the day on a bad foot, you’re not going to do much today anyways. ' +
            'So, you decide to play video games. After a couple of hours, you start to feel bored and decide to:',
        options: [
            {
                text: 'Continue to be unproductive',
                nextMessageID: 11
            },
            {
                text: 'Put down your phone and start to complete your to-do list for today',
                nextMessageID: 12
            }
        ]
    },
    {
        id: 8,
        message: 'You work for a few hours and then start to get hungry. You:',
        options: [
            {
                text: 'Order junk food',
                nextMessageID: 13
            },
            {
                text: 'Cook a nutritious lunch',
                nextMessageID: 14
            }
        ]
    },
    {
        id: 9,
        message: 'That quick second turns into 3 hours on social media, and you immediately realize you are starving. You:',
        options: [
            {
                text: 'Order junk food',
                nextMessageID: 13
            },
            {
                text: 'Cook a nutritious lunch',
                nextMessageID: 14
            }
        ]
    },
    {
        id: 10,
        message: 'You are so productive! You work for hours on end and suddenly feel a pang in your stomach saying that you’re hungry. You:',
        options: [
            {
                text: 'Order junk food',
                nextMessageID: 13
            },
            {
                text: 'Cook a nutritious lunch',
                nextMessageID: 14
            }
        ]
    },
    {
        id: 11,
        message: 'After a few more hours of being unproductive, you start to get hungry. You:',
        options: [
            {
                text: 'Order junk food',
                nextMessageID: 13
            },
            {
                text: 'Cook a nutritious lunch',
                nextMessageID: 14
            }
        ]
    },
    {
        id: 12,
        message: 'You work for a few hours and then start to get hungry. You:',
        options: [
            {
                text: 'Order junk food',
                nextMessageID: 13
            },
            {
                text: 'Cook a nutritious lunch',
                nextMessageID: 14
            }
        ]
    },
    {
        id: 13,
        message: 'You ordered fast food as you were craving unhealthy foods. ' +
            'After lunch, you feel very lethargic and decide to take a nap. ' +
            'A couple hours, you wake up even more tired than before. You:',
        options: [
            {
                text: 'Nap for 20 minutes',
                nextMessageID: 15
            },
            {
                text: 'Down a cup of coffee and get to work',
                nextMessageID: 16
            }
        ]
    },
    {
        id: 14,
        message: 'You feel energized after eating a healthy lunch and have the ' +
            'motivation to do work! You work for a couple of hours before hearing ' +
            'a notification chime on your phone. You:',
        options: [
            {
                text: 'Check your phone',
                nextMessageID: 17
            },
            {
                text: 'Ignore it and continue working',
                nextMessageID: 18
            }
        ]
    },
    {
        id: 15,
        message: 'Oh no! You overslept! You accidentally slept for hours! ' +
            'It’s now dinner time and you’re hungry from all of that sleeping. You:',
        options: [
            {
                text: 'Order junk food',
                nextMessageID: 19
            },
            {
                text: 'Cook a quick dinner',
                nextMessageID: 20
            }
        ]
    },
    {
        id: 16,
        message: 'You work productively for a few hours and then start to get hungry, you:',
        options: [
            {
                text: 'Order junk food',
                nextMessageID: 19
            },
            {
                text: 'Cook a quick dinner',
                nextMessageID: 20
            }
        ]
    },
    {
        id: 17,
        message: 'After checking your one notification, you get sucked into scrolling through Instagram, Twitter, ' +
            'Facebook, TikTok, and Snapchat. Hours flew by and it is now time for dinner. You:',
        options: [
            {
                text: 'Order junk food',
                nextMessageID: 19
            },
            {
                text: 'Cook a quick dinner',
                nextMessageID: 20
            }
        ]
    },
    {
        id: 18,
        message: 'You work for a few hours. You notice that it’s around the time for dinner, so you:',
        options: [
            {
                text: 'Order junk food',
                nextMessageID: 19
            },
            {
                text: 'Cook a quick dinner',
                nextMessageID: 20
            }
        ]
    },
    {
        id: 19,
        message: 'You work for a few hours, and as you didn’t order fast food for lunch, you wanted to order it for ' +
            'dinner as a treat. After dinner, you feel very lethargic, and wish to go to bed. You:',
        options: [
            {
                text: 'Get ready for bed, but stay on your phone for another couple of hours',
                nextMessageID: 21
            },
            {
                text: 'Get ready for bed and go to sleep',
                nextMessageID: 22
            }
        ]
    },
    {
        id: 20,
        message: `You feel refueled after eating a home-cooked dinner. You decide to work on homework for a few more hours before deciding to go to bed. You:`,
        options: [
            {
                text: 'Get ready for bed, but stay on your phone for another couple of hours',
                nextMessageID: 21
            },
            {
                text: 'Get ready for bed and go to sleep',
                nextMessageID: 22
            }
        ]
    },
    {
        id: 21,
        message: `You spent ${retrieveProcrastinationCount()} out of ${retrieveTotalSteps()} of your decisions procrastinating.`,
        // message: 'How many times did you procrastinate or chose not to be productive?',
        options: [
            {
                text: 'Play again?',
                nextMessageID: -1
            },
            {
                text: 'Get me out of here',
                nextMessageID: -2
            }
        ]
    },
    {
        id: 22,
        message: `You spent ${retrieveProcrastinationCount()} out of ${retrieveTotalSteps()} of your decisions procrastinating / being lazy.`,
        // message: 'How many times did you procrastinate or chose not to be productive?',
        options: [
            {
                text: 'I wanna play again',
                nextMessageID: -1
            },
            {
                text: 'Get me out of here',
                nextMessageID: -2
            }
        ]
    },

];

startGame();