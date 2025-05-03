// Questions array containing all questions from the book
const questions = [
    // Section 3: Prepositions
    {
        type: "multiple-choice",
        question: "2081 Set A Q.No. 7b The findings will lead ______ future research on the topic. (in/to) (Choose the correct preposition to complete the sentence.)",
        options: ["in", "to"],
        correctAnswer: "to"
    },
    {
        type: "multiple-choice",
        question: "2081 Set B Q.No. 7b The thief escaped ______ five feet below the tunnel beneath the surface that was buried about three brackets. (through/beside/below/onto) (Choose the correct preposition from the brackets.)",
        options: ["through", "beside", "below", "onto"],
        correctAnswer: "through"
    },
    {
        type: "multiple-choice",
        question: "2081 Set C Q.No. 7b Bears belong ______ (on/to/with/in) the family of mammals. (Choose the correct preposition to complete the sentence.)",
        options: ["on", "to", "with", "in"],
        correctAnswer: "to"
    },
    {
        type: "multiple-choice",
        question: "2080 GIE Set A Q.No. 7h I was accompanied ______ the hospital. (Use appropriate preposition.)",
        options: ["to", "at", "in", "with"],
        correctAnswer: "to"
    },
    {
        type: "multiple-choice",
        question: "2080 Set C Q.No. 7d I do not, ______ fact, know who she is staring. (on/in/at/with) (Put a suitable preposition in the space.)",
        options: ["on", "in", "at", "with"],
        correctAnswer: "in"
    },
    {
        type: "multiple-choice",
        question: "2080 Set D Q.No. 7d These leaders have great respect ______ the academicians of the country. (Use since/for/to/by to fill in the blanks.)",
        options: ["since", "for", "to", "by"],
        correctAnswer: "for"
    },
    {
        type: "multiple-choice",
        question: "2080 Set G Q.No. 7g The culprit came ______ office, walked across the road and got on a bus. (Use appropriate preposition-out of/toward/along/into to fill in the blanks.)",
        options: ["out of", "toward", "along", "into"],
        correctAnswer: "out of"
    },
    {
        type: "fill-in-the-blank",
        question: "2079 GIE Q.No. 7h His arguments are not based ______ truth. (Fill in the blanks with appropriate preposition-on/in/at.)",
        options: [],
        correctAnswer: "on"
    },
    {
        type: "multiple-choice",
        question: "2079 Set A Q.No. 7d She is suspected ______ stealing money. (Choose the correct preposition to complete the sentence.) (at/of/for)",
        options: ["at", "of", "for"],
        correctAnswer: "of"
    },
    {
        type: "fill-in-the-blank",
        question: "2079 Set B Q.No. 7d I am not interested ______ buying a new car now. (Put the correct preposition in the blank.)",
        options: [],
        correctAnswer: "in"
    },
    {
        type: "fill-in-the-blank",
        question: "2079 Set E Q.No. 7d All the celebrations and parties were called ______ because of the tragic accident. (Put the correct preposition in the blank.)",
        options: [],
        correctAnswer: "off"
    },

    // Section 4: Modal Verbs
    {
        type: "fill-in-the-blank",
        question: "2081 Set A Q.No. 7d You have just had a huge breakfast. You ______ (may not/won’t/can’t/needn’t) be hungry anymore. (Fill in the blanks with appropriate auxiliary verb.)",
        options: [],
        correctAnswer: "can’t"
    },
    {
        type: "fill-in-the-blank",
        question: "2081 Set B Q.No. 7d ‘Who is that man with Pushkar?’ ‘I’m not sure. He ______ (might/could/would/ought) be his father.’ (Choose the appropriate modal verb.)",
        options: [],
        correctAnswer: "might"
    },
    {
        type: "fill-in-the-blank",
        question: "2081 Set C Q.No. 7d My fingernails ______ They are so long. (will be/be/need/must) cutting. (Fill in the blank with an appropriate auxiliary verb.)",
        options: [],
        correctAnswer: "need"
    },
    {
        type: "fill-in-the-blank",
        question: "2080 Set C Q.No. 7d The street had a nasty jam. (might/must/could/would) have been demonstration of some political parties. (Put the appropriate modal auxiliary verb.)",
        options: [],
        correctAnswer: "might"
    },
    {
        type: "fill-in-the-blank",
        question: "2080 Set D Q.No. 7d People ______ think it is pathetic. (Use one of the verbs- are/might/could) to complete the sentence.)",
        options: [],
        correctAnswer: "might"
    },
    {
        type: "fill-in-the-blank",
        question: "2080 Set G Q.No. 7b Look! The man is laughing out jumping on the floor. He ______ (can/must/will/would) be mad. (Choose the correct option to fill in the blanks.)",
        options: [],
        correctAnswer: "must"
    },
    {
        type: "fill-in-the-blank",
        question: "2079 Set A Q.No. 7d These tasks are very important. You ______ (will/can/can’t/must) finish them by tomorrow. (Choose the correct modal verb.)",
        options: [],
        correctAnswer: "must"
    },
    {
        type: "fill-in-the-blank",
        question: "2079 Set B Q.No. 7d Rita ______ (should have/must have/will have/could have) missed the bus again. (Choose the correct option from the bracket to complete the sentence.)",
        options: [],
        correctAnswer: "must have"
    },
    {
        type: "fill-in-the-blank",
        question: "2079 Set E Q.No. 7d The food is really good at the restaurant. They ______ (will/can/must/should) have a great chef. (Choose the correct option from the bracket to complete the sentence.)",
        options: [],
        correctAnswer: "must"
    },

    // Section 5: Tense and Aspects
    {
        type: "fill-in-the-blank",
        question: "2081 Set B Q.No. 7e Please, do not call me between 8 and 10 a.m. We ______ (have/will have/have had/will be having) dinner then. (Choose the appropriate form of the verb.)",
        options: [],
        correctAnswer: "will be having"
    },
    {
        type: "fill-in-the-blank",
        question: "2080 Set C Q.No. 7e I am not sure of why she was so upset and distracted that day. She ______ (is overcome/overcome/overcame) by her past memories. (Use the appropriate form of the verb ‘overcome’.)",
        options: [],
        correctAnswer: "was overcome"
    },

    // Section 6: Infinitives and Gerunds
    {
        type: "fill-in-the-blank",
        question: "2081 Set A Q.No. 7f If you are lost in a snow storm, it’s best ______ (dig/digging/to dig/to have been digging) a hole and sit in it until it stops snowing. (Fill in the blanks choosing appropriate infinitive or gerund to complete the sentence.)",
        options: [],
        correctAnswer: "to dig"
    },
    {
        type: "fill-in-the-blank",
        question: "2081 Set B Q.No. 7f Yubaraj said that the document was personal and he wouldn’t let me ______ (read/reading/to read). (Identify the grammatical error in the underlined part and correct it.)",
        options: [],
        correctAnswer: "to read"
    },
    {
        type: "fill-in-the-blank",
        question: "2081 Set C Q.No. 7f I am thankful for his ______ (come/coming) in time. (Fill in the blanks choosing appropriate infinitive or gerund to complete the sentence.)",
        options: [],
        correctAnswer: "coming"
    },
    {
        type: "fill-in-the-blank",
        question: "2079 Set A Q.No. 7g My father is fond of ______ (garden/gardening/to garden). He keeps himself busy caring the flowers in the garden. (Choose the correct word to complete the sentence.)",
        options: [],
        correctAnswer: "gardening"
    },
    {
        type: "fill-in-the-blank",
        question: "2079 Set B Q.No. 7f Max finished ______ (to do/doing) his homework and then he went to the party with George to chill. (Choose the correct option from the bracket to complete the sentence.)",
        options: [],
        correctAnswer: "doing"
    },
    {
        type: "fill-in-the-blank",
        question: "2079 Set E Q.No. 7f We look forward to ______ (hear/hearing) from you soon. (Choose the correct option from the bracket to complete the sentence.)",
        options: [],
        correctAnswer: "hearing"
    },
    {
        type: "fill-in-the-blank",
        question: "2079 Set E Q.No. 7f They are likely to ______ (show/showing) up at any time. (Choose the correct option from the bracket to complete the sentence.)",
        options: [],
        correctAnswer: "show"
    },
    {
        type: "fill-in-the-blank",
        question: "2079 Set E Q.No. 7f The man denied ______ (commit/committing) the crime. (Choose the correct option from the bracket to complete the sentence.)",
        options: [],
        correctAnswer: "committing"
    },

    // Section 7: Conjunctions
    {
        type: "fill-in-the-blank",
        question: "2081 Set A Q.No. 7g She left the clothes out. It was raining ______ (Combine the pair of sentences using appropriate connective.)",
        options: [],
        correctAnswer: "but"
    },
    {
        type: "fill-in-the-blank",
        question: "2081 Set B Q.No. 7g They saw that a tiger was prowling in the shrub near them. They attacked the tiger. (Combine the two sentences using ‘as soon as’.)",
        options: [],
        correctAnswer: "As soon as they saw that a tiger was prowling in the shrub near them, they attacked the tiger."
    },
    {
        type: "fill-in-the-blank",
        question: "2081 Set C Q.No. 7g I had to work until midnight. I was very tired. (Combine the pair of sentences using appropriate connective.)",
        options: [],
        correctAnswer: "and"
    },
    {
        type: "fill-in-the-blank",
        question: "2080 GIE Set A Q.No. 7f I was tired. I went to bed. (Use appropriate connective.)",
        options: [],
        correctAnswer: "so"
    },
    {
        type: "fill-in-the-blank",
        question: "2080 Set C Q.No. 7d It is almost impossible for one to succeed ______ one works hard. (Put a correct conjunction in the space.)",
        options: [],
        correctAnswer: "unless"
    },
    {
        type: "fill-in-the-blank",
        question: "2080 Set D Q.No. 7f We got wet in the rain. We had an umbrella. (Combine the sentences using appropriate connective.)",
        options: [],
        correctAnswer: "but"
    },
    {
        type: "fill-in-the-blank",
        question: "2080 Set G Q.No. 7f We go on outing every year. We always have financial problems. (Use although/in spite/despite/although to join them.)",
        options: [],
        correctAnswer: "although"
    },
    {
        type: "fill-in-the-blank",
        question: "2079 GIE Q.No. 7f I wanted to go back from office ______ I was feeling uneasy. (Supply appropriate connective-because/so/whichever is appropriate.)",
        options: [],
        correctAnswer: "because"
    },
    {
        type: "fill-in-the-blank",
        question: "2079 Set A Q.No. 7g She worked hard ______ (although) her friends. (Join these sentences with ‘although’.)",
        options: [],
        correctAnswer: "although her friends did not"
    },
    {
        type: "fill-in-the-blank",
        question: "2079 Set B Q.No. 7g I still can’t remember his house ______ I’ve been there several times. (Put a correct conjunction in the blank to complete the sentence.)",
        options: [],
        correctAnswer: "although"
    },
    {
        type: "fill-in-the-blank",
        question: "2079 Set E Q.No. 7d If he is rich, he is always dressed in ______ (Put a correct conjunction in the blank to complete the sentence.)",
        options: [],
        correctAnswer: "rags"
    },

    // Section 8: Relative Clause
    {
        type: "fill-in-the-blank",
        question: "2081 Set A Q.No. 7h There is someone at the door ______ I want to speak to George. (Join the pair of sentences using an appropriate relative pronoun.)",
        options: [],
        correctAnswer: "who"
    },
    {
        type: "fill-in-the-blank",
        question: "2081 Set B Q.No. 7h I was born in a remote village. I spent my childhood memories from there. (Combine the two sentences using an appropriate relative pronoun.)",
        options: [],
        correctAnswer: "where"
    },
    {
        type: "fill-in-the-blank",
        question: "2081 Set C Q.No. 7h The hotel was very comfortable. We stayed there. (Join the pair of sentences using an appropriate relative pronoun.)",
        options: [],
        correctAnswer: "where"
    },
    {
        type: "multiple-choice",
        question: "2080 GIE Set A Q.No. 7g A cemetery is a place ______ dead bodies are buried. (Use appropriate relative pronoun.)",
        options: ["who", "whom", "where", "which"],
        correctAnswer: "where"
    },
    {
        type: "multiple-choice",
        question: "2080 Set C Q.No. 7h They saw a man in the river, ______ would be an inspiration for them. (who/whose/whom/that) pays in life. (Choose the appropriate relative pronoun.)",
        options: ["who", "whose", "whom", "that"],
        correctAnswer: "who"
    },
    {
        type: "fill-in-the-blank",
        question: "2080 Set G Q.No. 7g The garden is beautiful. We spend a lot of time in the garden everyday. (Join the sentence using one of the relative pronouns- who/whom/where/which.)",
        options: [],
        correctAnswer: "where"
    },
    {
        type: "multiple-choice",
        question: "2079 GIE Q.No. 7g The driver, ______ was careful. (Use appropriate relative pronoun.)",
        options: ["who", "whom", "where", "which"],
        correctAnswer: "who"
    },

    // Section 9: Voice
    {
        type: "fill-in-the-blank",
        question: "2081 Set A Q.No. 7f After a complete examination, the patient ______ (are sent/were sent/was sent/to be sent) home. (Choose the appropriate passive form of the verb and write it.)",
        options: [],
        correctAnswer: "was sent"
    },
    {
        type: "fill-in-the-blank",
        question: "2081 Set B Q.No. 7f They intend this letter merely to remind the officials of the urgency of the issue. (Change the sentence into passive voice.)",
        options: [],
        correctAnswer: "This letter is intended by them merely to remind the officials of the urgency of the issue."
    },
    {
        type: "fill-in-the-blank",
        question: "2081 Set C Q.No. 7f It is winter. Everything ______ (are covered/were covered/must be covered) with snow. (Choose the appropriate passive form of the verb and write it.)",
        options: [],
        correctAnswer: "must be covered"
    },
    {
        type: "fill-in-the-blank",
        question: "2080 GIE Set A Q.No. 7f They sent an article yesterday. (Change into passive voice.)",
        options: [],
        correctAnswer: "An article was sent by them yesterday."
    },
    {
        type: "fill-in-the-blank",
        question: "2080 Set C Q.No. 7f Students generally dislike ______ (giving/being given) strict instructions by the administration. (Choose the correct option.)",
        options: [],
        correctAnswer: "being given"
    },
    {
        type: "fill-in-the-blank",
        question: "2080 Set C Q.No. 7f No one loves them in the public. (Change into passive voice.)",
        options: [],
        correctAnswer: "They are not loved by anyone in the public."
    },
    {
        type: "fill-in-the-blank",
        question: "2080 Set D Q.No. 7h Parents gave children a bar of chocolate. (Change it into passive voice.)",
        options: [],
        correctAnswer: "A bar of chocolate was given to children by parents."
    },
    {
        type: "fill-in-the-blank",
        question: "2079 GIE Q.No. 7d All the books were published in time in active voice. (Change into passive voice.)",
        options: [],
        correctAnswer: "This question is already in passive voice."
    },
    {
        type: "fill-in-the-blank",
        question: "2079 Set A Q.No. 7d Did they confess the crime? (Change into passive voice.)",
        options: [],
        correctAnswer: "Was the crime confessed by them?"
    },
    {
        type: "fill-in-the-blank",
        question: "2079 Set B Q.No. 7f I resent people interrupting me when speaking. (Change into passive voice.)",
        options: [],
        correctAnswer: "I resent being interrupted by people when speaking."
    },
    {
        type: "fill-in-the-blank",
        question: "2079 Set E Q.No. 7f I want my students to respect me. (Change into passive voice.)",
        options: [],
        correctAnswer: "I want to be respected by my students."
    },

    // Section 10: Reported Speech
    {
        type: "fill-in-the-blank",
        question: "2081 Set A Q.No. 7f She asked, ‘Have you seen this film?’ (Report the speech using the verb ‘wondered’.)",
        options: [],
        correctAnswer: "She wondered if I had seen that film."
    },
    {
        type: "fill-in-the-blank",
        question: "2081 Set B Q.No. 7f She said to her clerk, ‘Don’t make noise again or you’ll be sacked.’ (Change the sentence into indirect speech.)",
        options: [],
        correctAnswer: "She told her clerk not to make noise again or he/she would be sacked."
    },
    {
        type: "fill-in-the-blank",
        question: "2081 Set C Q.No. 7f He asked, ‘Did she agree with me?’ (Report the speech using the verb ‘wondered’.)",
        options: [],
        correctAnswer: "He wondered if she had agreed with him."
    },
    {
        type: "fill-in-the-blank",
        question: "2080 GIE Set A Q.No. 7f ‘Where have you been these days?’ (Report this question using ‘She wanted to know’.)",
        options: [],
        correctAnswer: "She wanted to know where I had been those days."
    },
    {
        type: "fill-in-the-blank",
        question: "2080 Set C Q.No. 7f ‘I didn’t catch you. It is 50 or 80?’ the customer said. (Change into indirect speech.)",
        options: [],
        correctAnswer: "The customer said that he/she hadn’t caught me and asked if it was 50 or 80."
    },
    {
        type: "fill-in-the-blank",
        question: "2080 Set D Q.No. 7g ‘You must not ignore your studies,’ the class teacher said to the student. (Change into indirect speech.)",
        options: [],
        correctAnswer: "The class teacher told the student that he/she must not ignore his/her studies."
    },
    {
        type: "fill-in-the-blank",
        question: "2080 Set G Q.No. 7a Students said to the principal, ‘Can you manage extra classes through virtual process?’ (Change into indirect speech.)",
        options: [],
        correctAnswer: "Students asked the principal if he/she could manage extra classes through the virtual process."
    },
    {
        type: "fill-in-the-blank",
        question: "2079 GIE Q.No. 7f ‘How many of you are there?’ (Change in to indirect speech.)",
        options: [],
        correctAnswer: "He/she asked how many of them were there."
    },
    {
        type: "fill-in-the-blank",
        question: "2079 Set A Q.No. 7f Please, help the poor, beginning with ‘He requested’. (Report the sentence.)",
        options: [],
        correctAnswer: "He requested to help the poor."
    },
    {
        type: "fill-in-the-blank",
        question: "2079 Set B Q.No. 7d ‘Did you receive my email?’ (Change with the reporting clause.)",
        options: [],
        correctAnswer: "He/she asked if I had received his/her email."
    },
    {
        type: "fill-in-the-blank",
        question: "2079 Set E Q.No. 7f Did you hear me? (Report this with reporting clause. She asked ...)",
        options: [],
        correctAnswer: "She asked if I had heard her."
    },

    // Section 11: Question Tag
    {
        type: "fill-in-the-blank",
        question: "2080 GIE Set A Q.No. 7a She is honest ______? (Use appropriate tag.)",
        options: [],
        correctAnswer: "isn’t she"
    },
    {
        type: "fill-in-the-blank",
        question: "2079 GIE Q.No. 7f We are certain, ______? (Use appropriate tag.)",
        options: [],
        correctAnswer: "aren’t we"
    },
    {
        type: "fill-in-the-blank",
        question: "Sulochana isn’t here, ______? (Add appropriate tag to the following sentences.)",
        options: [],
        correctAnswer: "is she"
    },
    {
        type: "fill-in-the-blank",
        question: "I am a regular student, ______? (Add appropriate tag to the following sentences.)",
        options: [],
        correctAnswer: "aren’t I"
    },
    {
        type: "fill-in-the-blank",
        question: "She has booked ticket for theatre, ______? (Add appropriate tag to the following sentences.)",
        options: [],
        correctAnswer: "hasn’t she"
    },
    {
        type: "fill-in-the-blank",
        question: "They had a big project to execute, ______? (Add appropriate tag to the following sentences.)",
        options: [],
        correctAnswer: "didn’t they"
    },

    // Section 12: Miscellaneous
    {
        type: "fill-in-the-blank",
        question: "2081 Set A Q.No. 7e To help me calm down, the teacher advised me to put several cabbages in the room where practice. (Identify which bolded verb form is incorrect, and correct it.)",
        options: [],
        correctAnswer: "practiced"
    },
    {
        type: "fill-in-the-blank",
        question: "2081 Set B Q.No. 7a Nepal is a culture diverse country where one can enjoy an example of tolerance and understanding among a number of castes and creeds. (Correct the underlined word in the sentence.)",
        options: [],
        correctAnswer: "culturally"
    },
    {
        type: "fill-in-the-blank",
        question: "2081 Set C Q.No. 7e Suddenly, the girl felt very disappointed and didn’t know what to do while she waiting. (Identify which bolded verb form is incorrect, and correct it.)",
        options: [],
        correctAnswer: "was waiting"
    },

    // Section E: Sounds, Vocabulary and Dictionary Use
    // A. Sound System in English
    {
        type: "multiple-choice",
        question: "Which of the following doesn’t have /æ/ sound? (ham, ban, pan, fast)",
        options: ["ham", "ban", "pan", "fast"],
        correctAnswer: "fast"
    },
    {
        type: "multiple-choice",
        question: "Which of the following words possesses /u:/ sound? (cup, put, foot, but)",
        options: ["cup", "put", "foot", "but"],
        correctAnswer: "put"
    },
    {
        type: "multiple-choice",
        question: "Which of the following words doesn’t have /eə/ sound? (air, hair, fair, tear)",
        options: ["air", "hair", "fair", "tear"],
        correctAnswer: "tear"
    },
    {
        type: "multiple-choice",
        question: "Which of the following words has /dʒ/ initial sound? (judge, zap, zoo, gauge)",
        options: ["judge", "zap", "zoo", "gauge"],
        correctAnswer: "judge"
    },
    {
        type: "multiple-choice",
        question: "Which of the following words has /θ/ sound in the beginning? (This, Thigh, Think, Thomas)",
        options: ["This", "Thigh", "Think", "Thomas"],
        correctAnswer: "Think"
    },

    // B. Vocabulary Study - Word Formation
    {
        type: "multiple-choice",
        question: "The ______ (boy, boys, boy’s, boy) are playing. (Select the correct word from the bracket.)",
        options: ["boy", "boys", "boy’s", "boy"],
        correctAnswer: "boys"
    },
    {
        type: "multiple-choice",
        question: "‘Hema’s, Hemas’, Hema, Hemas) ______ parents are quite educated. (Select the correct word from the bracket.)",
        options: ["Hema’s", "Hemas’", "Hema", "Hemas"],
        correctAnswer: "Hema’s"
    },
    {
        type: "multiple-choice",
        question: "Which of the following words is a stem? (actor, act, action, acting)",
        options: ["actor", "act", "action", "acting"],
        correctAnswer: "act"
    },
    {
        type: "fill-in-the-blank",
        question: "I just can’t believe it! The story is ______ believable. (Complete the sentence by writing the correct prefixes in the blank space; dis-, in-, mis-, re-, un-, under-)",
        options: [],
        correctAnswer: "unbelievable"
    },
    {
        type: "fill-in-the-blank",
        question: "Either suffix or prefix to ‘loyal, play, do, child’ form a new word. (loyal + _____)",
        options: [],
        correctAnswer: "disloyal"
    },

    // C. Parts of Speech
    {
        type: "multiple-choice",
        question: "He often plays the trumpet. (Which part of speech is the underlined word in the sentence?) (noun, pronoun, verb, adjective)",
        options: ["noun", "pronoun", "verb", "adjective"],
        correctAnswer: "verb"
    },
    {
        type: "multiple-choice",
        question: "Do you like dogs? (Which part of speech is the underlined word in the sentence?) (noun, pronoun, verb, adverb)",
        options: ["noun", "pronoun", "verb", "adverb"],
        correctAnswer: "verb"
    },
    {
        type: "multiple-choice",
        question: "They listen to music every day. (Which part of speech is the underlined word in the sentence?) (noun, pronoun, verb, adverb)",
        options: ["noun", "pronoun", "verb", "adverb"],
        correctAnswer: "verb"
    },
    {
        type: "multiple-choice",
        question: "She is an old lady. (Which part of speech is the underlined word in the sentence?) (noun, pronoun, adjective, adverb)",
        options: ["noun", "pronoun", "adjective", "adverb"],
        correctAnswer: "adjective"
    },
    {
        type: "multiple-choice",
        question: "The group went climbing in the mountains. (Which part of speech is the underlined word in the sentence?) (noun, conjunction, adjective, adverb)",
        options: ["noun", "conjunction", "adjective", "adverb"],
        correctAnswer: "noun"
    },

    // D. Nouns - Number
    {
        type: "multiple-choice",
        question: "There ______ plenty of examples to explain this point. (be) (is, are, was, were)",
        options: ["is", "are", "was", "were"],
        correctAnswer: "are"
    },
    {
        type: "multiple-choice",
        question: "No news ______ good news. (be) (is, are, was, were)",
        options: ["is", "are", "was", "were"],
        correctAnswer: "is"
    },
    {
        type: "multiple-choice",
        question: "Measles ______ a disease. (be) (is, are, was, were)",
        options: ["is", "are", "was", "were"],
        correctAnswer: "is"
    },
    {
        type: "multiple-choice",
        question: "This pair of trousers ______ sixty rupees. (cost) (cost, costs, costing, costed)",
        options: ["cost", "costs", "costing", "costed"],
        correctAnswer: "costs"
    },
    {
        type: "multiple-choice",
        question: "Sheep ______ us wool. (give) (gives, giving, gave, give)",
        options: ["gives", "giving", "gave", "give"],
        correctAnswer: "give"
    },

    // E. Verb Conjugation
    {
        type: "multiple-choice",
        question: "Maya ______ since morning. (work) (is working, works, has been working, had worked)",
        options: ["is working", "works", "has been working", "had worked"],
        correctAnswer: "has been working"
    },
    {
        type: "multiple-choice",
        question: "I ______ in the garden, when he arrived. (am working, was working, worked, had been working)",
        options: ["am working", "was working", "worked", "had been working"],
        correctAnswer: "was working"
    },

    // F. Punctuation
    {
        type: "fill-in-the-blank",
        question: "All of the people at the school including the teachers and students were glad when summer break came ______ (students, students:, students., students;)",
        options: [],
        correctAnswer: "students."
    },
    {
        type: "multiple-choice",
        question: "Sit up straight ______ (., ?, !, :)",
        options: [".", "?", "!", ":"],
        correctAnswer: "."
    },
    {
        type: "multiple-choice",
        question: "They asked what time the department store would open ______ (., ?, !, :)",
        options: [".", "?", "!", ":"],
        correctAnswer: "?"
    },
    {
        type: "multiple-choice",
        question: "Who do you think will win the contest ______ (., ?, !, :)",
        options: [".", "?", "!", ":"],
        correctAnswer: "?"
    },
    {
        type: "multiple-choice",
        question: "To ______ everyones surprise Anne was on time for her math class (everyones, everyone’s, everyones’, every body’s surprise)",
        options: ["everyones", "everyone’s", "everyones’", "every body’s surprise"],
        correctAnswer: "everyone’s"
    },

    // G. Dictionary Use
    {
        type: "multiple-choice",
        question: "In which quarter of the dictionary will you find the following words? (narrative, bystander, welfare, gelatine)",
        options: ["First", "Second", "Third", "Fourth"],
        correctAnswer: "Third"
    },
    {
        type: "multiple-choice",
        question: "In which quarter of the dictionary will you find the following words? (hungry, thumb, ring, finger)",
        options: ["First", "Second", "Third", "Fourth"],
        correctAnswer: "Second"
    },
    {
        type: "multiple-choice",
        question: "In which quarter of the dictionary will you find the following words? (signatory, elegantly, contingency, opportunity)",
        options: ["First", "Second", "Third", "Fourth"],
        correctAnswer: "Fourth"
    },
    {
        type: "multiple-choice",
        question: "In which quarter of the dictionary will you find the following words? (paint, yawn, cheerful, loud)",
        options: ["First", "Second", "Third", "Fourth"],
        correctAnswer: "Fourth"
    },

    // H. Idioms and Phrases
    {
        type: "multiple-choice",
        question: "I would rather have coffee ______ tea. (instead of, instead to, in spite of, in spite on)",
        options: ["instead of", "instead to", "in spite of", "in spite on"],
        correctAnswer: "instead of"
    },
    {
        type: "multiple-choice",
        question: "______ the rains, we went out. (in spite of, in spite, fire, break glass to escape, in case of)",
        options: ["in spite of", "in spite", "fire", "break glass to escape", "in case of"],
        correctAnswer: "in spite of"
    },
    {
        type: "multiple-choice",
        question: "I am standing here ______ my friends. (in behalf of, on behalf of, on behalf)",
        options: ["in behalf of", "on behalf of", "on behalf"],
        correctAnswer: "on behalf of"
    },
    {
        type: "multiple-choice",
        question: "We solved the problem ______ a new device developed by our engineers. (by means of, by means, by means to)",
        options: ["by means of", "by means", "by means to"],
        correctAnswer: "by means of"
    },

    // I. Miscellaneous
    {
        type: "multiple-choice",
        question: "2081 Set A Q.No. 8 a. Which of the following words has a different consonant sound? (eyes, price, dice, rise)",
        options: ["eyes", "price", "dice", "rise"],
        correctAnswer: "eyes"
    },
    {
        type: "multiple-choice",
        question: "2081 Set A Q.No. 8 b. Which of the following words is correctly spelt? (forign, foreign, forein, foriegn)",
        options: ["forign", "foreign", "forein", "foriegn"],
        correctAnswer: "foreign"
    },
    {
        type: "multiple-choice",
        question: "2081 Set A Q.No. 8 c. Which of the following words is synonymous with the word ‘stop’? (cease, eliminate, commence, commend)",
        options: ["cease", "eliminate", "commence", "commend"],
        correctAnswer: "cease"
    },
    {
        type: "multiple-choice",
        question: "2081 Set A Q.No. 8 d. Which one of the following words comes between ‘minimum’ and ‘minister’? (minimart, minstrel, minimize, miniscule)",
        options: ["minimart", "minstrel", "minimize", "miniscule"],
        correctAnswer: "minimize"
    },
    {
        type: "fill-in-the-blank",
        question: "2081 Set A Q.No. 8 e. ‘I was nervous about my English exam, but I passed with flying colours,’ ‘Which of the following refers to the underlined in this sentence? (scored mixed grades, scored low grades, scored high grades, scored average grades)",
        options: [],
        correctAnswer: "scored high grades"
    },
    {
        type: "multiple-choice",
        question: "2081 Set B Q.No. 8 a. Which of the following pairs of words has a similar sound? (beer, bear, near, there, hear, hare, care, pair)",
        options: ["beer, bear", "near, there", "hear, hare", "care, pair"],
        correctAnswer: "hear, hare"
    },
    {
        type: "fill-in-the-blank",
        question: "2081 Set B Q.No. 8 b. Keeping away from complexities in future, learning will definitely ______ one of the following word that takes the suffix ‘-en’ when it is changed into a verb and completes the sentence. (bright, deep, gold, short)",
        options: [],
        correctAnswer: "brighten"
    },
    {
        type: "multiple-choice",
        question: "2081 Set B Q.No. 8 c. The prompt decision of the court stopped municipality from lagging behind. Which of the following word is opposite in meaning to the word ‘prompt’? (immediate, instant, delayed, timely)",
        options: ["immediate", "instant", "delayed", "timely"],
        correctAnswer: "delayed"
    },
    {
        type: "multiple-choice",
        question: "2081 Set C Q.No. 8 a. Which one of the following words has a different initial consonant sound? (knit, gnash, gnaw, snore)",
        options: ["knit", "gnash", "gnaw", "snore"],
        correctAnswer: "snore"
    },
    {
        type: "fill-in-the-blank",
        question: "2081 Set C Q.No. 8 b. They usually weed the flower beds and water them in the morning. In this sentence, the word ‘water’ is a ______ (noun, adjective, verb, adverb)",
        options: [],
        correctAnswer: "verb"
    },
    {
        type: "multiple-choice",
        question: "2081 Set C Q.No. 8 c. Mr. Thompson is really good at conjuring so much that people enjoy how his quick flips seem to make coins appear and disappear. In this sentence, the word ‘conjuring’ is similar in meaning to ______ (creating humour, doing tricks, frightening someone, confusing someone)",
        options: ["creating humour", "doing tricks", "frightening someone", "confusing someone"],
        correctAnswer: "doing tricks"
    },
    {
        type: "multiple-choice",
        question: "2081 Set C Q.No. 8 d. Choose the likely guidewords for the headword ‘grunt’. (grudge/grungy, gruff/grudge, gruel/grumble, grubby/grumpy)",
        options: ["grudge/grungy", "gruff/grudge", "gruel/grumble", "grubby/grumpy"],
        correctAnswer: "gruel/grumble"
    },
    {
        type: "fill-in-the-blank",
        question: "2081 Set C Q.No. 8 e. The argument between the two friends continued for long, but finally one of them gave in as his points sounded too weak. In this sentence, the phrase ‘gave in’ is close in meaning to ______ (conquered, admitted, rejected, defended)",
        options: [],
        correctAnswer: "admitted"
    },
    {
        type: "multiple-choice",
        question: "2080 GIE Set A Q.No. 8 a. Which of the following pair of words have the same initial vowel sound? (ago, alive, born, torn, alive, derive)",
        options: ["ago, alive", "born, torn", "alive, derive"],
        correctAnswer: "born, torn"
    },
    {
        type: "fill-in-the-blank",
        question: "2080 GIE Set A Q.No. 8 b. Put appropriate root words. (parent, simple, problem, easy)",
        options: [],
        correctAnswer: "parental"
    },
    {
        type: "multiple-choice",
        question: "2080 GIE Set A Q.No. 8 c. Sabita can’t ______ a baby. (bare, born, bear, beer)",
        options: ["bare", "born", "bear", "beer"],
        correctAnswer: "bear"
    },
    {
        type: "multiple-choice",
        question: "2080 GIE Set A Q.No. 8 d. The girl will certainly ‘spill the beans’ in front of the police. Which of the following has similar meaning to ‘spill the beans’ in this sentence? (arrive at wrong time, reveal the secret, to make unkind remarks about someone, to praise one’s own achievement)",
        options: ["arrive at wrong time", "reveal the secret", "to make unkind remarks about someone", "to praise one’s own achievement"],
        correctAnswer: "reveal the secret"
    },
    {
        type: "multiple-choice",
        question: "2080 GIE Set A Q.No. 8 e. Which of the following is the noun of the root word ‘pollute’? (pollution, polluted, polluting, pollutation)",
        options: ["pollution", "polluted", "polluting", "pollutation"],
        correctAnswer: "pollution"
    },
    {
        type: "multiple-choice",
        question: "2080 Set C Q.No. 8 a. Which one of the following words has a different sound? (rough, tough, though, calf)",
        options: ["rough", "tough", "though", "calf"],
        correctAnswer: "though"
    },
    {
        type: "fill-in-the-blank",
        question: "2080 Set C Q.No. 8 b. I got a beautiful present in my birthday. The word ‘present’ in this sentence is ______ (an adjective, an adverb, a verb, a noun)",
        options: [],
        correctAnswer: "a noun"
    },
    {
        type: "multiple-choice",
        question: "2080 Set C Q.No. 8 c. Which one of the following words has a prefix? (unity, under, union, unfair)",
        options: ["unity", "under", "union", "unfair"],
        correctAnswer: "unfair"
    },
    {
        type: "multiple-choice",
        question: "2080 Set C Q.No. 8 d. Which one of the following words comes between ‘bore’ and ‘brace’ in the dictionary entry? (rectangle, reconsider, referee, redeem)",
        options: ["rectangle", "reconsider", "referee", "redeem"],
        correctAnswer: "box"
    },
    {
        type: "fill-in-the-blank",
        question: "2080 Set C Q.No. 8 e. Nothing can ______ for the loss of a child. Which of the following phrasal verbs completes this sentence? (make up, make off, make over, make into)",
        options: [],
        correctAnswer: "make up"
    },
    {
        type: "multiple-choice",
        question: "2080 Set D Q.No. 8 a. The beauty of nature must be praised by all. Here the word beauty is a ______ (noun, adjective, adverb, verb)",
        options: ["noun", "adjective", "adverb", "verb"],
        correctAnswer: "noun"
    },
    {
        type: "multiple-choice",
        question: "2080 Set D Q.No. 8 b. Which one of the following words does not take the prefix ‘un’? (satisfy, attended, cultured, civilized)",
        options: ["satisfy", "attended", "cultured", "civilized"],
        correctAnswer: "attended"
    },
    {
        type: "multiple-choice",
        question: "2080 Set D Q.No. 8 c. Which of the following words has correct spelling? (writing, putting, comming, running)",
        options: ["writing", "putting", "comming", "running"],
        correctAnswer: "running"
    },
    {
        type: "multiple-choice",
        question: "2080 Set D Q.No. 8 d. The antonym of ‘deficient’ is ______ (faulty, perfect, short, scarce)",
        options: ["faulty", "perfect", "short", "scarce"],
        correctAnswer: "perfect"
    },
    {
        type: "multiple-choice",
        question: "2080 Set D Q.No. 8 e. Which of the following words has same vowel sound? (sew, so, kite, rate, cat, men, pan, pen)",
        options: ["sew, so", "kite, rate", "cat, men", "pan, pen"],
        correctAnswer: "pan, pen"
    },

    // Section D: Grammar
    // 1. Adjectives and Adverbs
    {
        type: "fill-in-the-blank",
        question: "2081 Set A Q.No. 7a The assignment looked easy ______ (Identify the adjective in this sentence.)",
        options: [],
        correctAnswer: "easy"
    },
    {
        type: "fill-in-the-blank",
        question: "2081 Set C Q.No. 7a Students did well on the Mid Term examinations ______ (Identify the adverb in this sentence.)",
        options: [],
        correctAnswer: "well"
    },
    {
        type: "fill-in-the-blank",
        question: "2080 Set C Q.No. 7a The little girl danced really ______ in the annual programme of the school. (Complete the sentence with an appropriate adverb.)",
        options: [],
        correctAnswer: "well"
    },
    {
        type: "fill-in-the-blank",
        question: "2080 Set D Q.No. 7a This year the whole winter season was dry. There was very ______ (more/many/few/little) rain. (Choose appropriate word and rewrite the sentence.)",
        options: [],
        correctAnswer: "little"
    },
    {
        type: "fill-in-the-blank",
        question: "2080 Set D Q.No. 7h Health care in Nepal is not as ______ as it is abroad. (Use ‘expensive’ appropriately to fill in the blanks.)",
        options: [],
        correctAnswer: "expensive"
    },
    {
        type: "fill-in-the-blank",
        question: "2080 Set G Q.No. 7h I can’t work as ______ as I used to five years ago. (Rewrite it using hard/harder/hardest/more hard, whichever is appropriate.)",
        options: [],
        correctAnswer: "hard"
    },
    {
        type: "fill-in-the-blank",
        question: "2079 Set A Q.No. 7a Drive ______ or else you might have an accident. (Complete the sentence with a suitable adverb.)",
        options: [],
        correctAnswer: "carefully"
    },
    {
        type: "fill-in-the-blank",
        question: "2079 Set B Q.No. 7a The reason Deepak has never had an accident is that he drives ______ than everyone else. (Complete the sentence with an appropriate adverb.)",
        options: [],
        correctAnswer: "more carefully"
    },
    {
        type: "fill-in-the-blank",
        question: "2079 Set E Q.No. 7a The cool breeze blew ______ on her face. (Complete the sentence with an appropriate adverb.)",
        options: [],
        correctAnswer: "gently"
    },

    // 2. Subject-Verb Agreement
    {
        type: "multiple-choice",
        question: "2081 Set A Q.No. 7c Neither my mother nor my sisters ______ (is/are/has been/have been) coming to visit me this summer. (Choose the correct verb form to complete the sentence.)",
        options: ["is", "are", "has been", "have been"],
        correctAnswer: "are"
    },
    {
        type: "multiple-choice",
        question: "2081 Set B Q.No. 7c The class monitor, as well as his friends, usually ______ (perform/performs/performing/performed) well in the extra-curricular activities. (Choose the correct verb from the brackets.)",
        options: ["perform", "performs", "performing", "performed"],
        correctAnswer: "performs"
    },
    {
        type: "multiple-choice",
        question: "2081 Set C Q.No. 7c At the moment, neither students nor their teacher ______ (is/are/has been/have been) participating in the festival. (Choose the correct verb form to complete the sentence.)",
        options: ["is", "are", "has been", "have been"],
        correctAnswer: "is"
    }
];
// Shuffle the questions array using Fisher-Yates algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Initialize quiz variables
let currentQuestionIndex = 0;
let score = 0;
let answered = false; // Track if the question has been answered

// Shuffle questions at the start
shuffleArray(questions);

// Load the first question
loadQuestion();

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const userAnswerInput = document.getElementById("userAnswer");

    // Reset answered state
    answered = false;

    // Clear previous options and input
    optionsElement.innerHTML = "";
    userAnswerInput.style.display = "none";
    userAnswerInput.value = "";
    userAnswerInput.disabled = false; // Re-enable input for the new question

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question; // Question is read-only

    // Display options for multiple-choice questions
    if (currentQuestion.type === "multiple-choice") {
        currentQuestion.options.forEach(option => {
            const button = document.createElement("button");
            button.textContent = option;

            // Handle both click and touch events for better mobile support
            const handleAnswer = () => {
                if (!answered) {
                    checkAnswer(option);
                    answered = true;
                    disableInputs();
                }
            };
            button.onclick = handleAnswer;
            button.ontouchstart = (e) => {
                e.preventDefault(); // Prevent scrolling or zooming on touch
                handleAnswer();
            };

            optionsElement.appendChild(button);
        });
    } else {
        // Show input field for fill-in-the-blank questions
        userAnswerInput.style.display = "block";
        userAnswerInput.focus(); // Auto-focus for better mobile UX

        // Handle Enter key and blur event (e.g., when "Done" is pressed on mobile keyboard)
        userAnswerInput.onkeypress = (e) => {
            if (e.key === "Enter" && !answered) {
                checkAnswer();
                answered = true;
                disableInputs();
            }
        };
        userAnswerInput.onblur = () => {
            // Optional: Submit answer when the input loses focus (e.g., "Done" on mobile keyboard)
            if (!answered && userAnswerInput.value.trim()) {
                checkAnswer();
                answered = true;
                disableInputs();
            }
        };
    }
}

function checkAnswer(userAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
    const resultElement = document.getElementById("result");
    const scoreElement = document.getElementById("scoreValue");

    // If it's a fill-in-the-blank question, get the user's input
    if (currentQuestion.type === "fill-in-the-blank") {
        userAnswer = document.getElementById("userAnswer").value.trim().toLowerCase(); // Convert to lowercase for case-insensitive comparison
        if (!userAnswer) {
            resultElement.textContent = "Please enter an answer!";
            resultElement.className = "incorrect";
            return;
        }
    } else {
        userAnswer = userAnswer.toLowerCase(); // Convert multiple-choice answer to lowercase for case-insensitive comparison
    }

    // Compare answers in a case-insensitive manner
    if (userAnswer === currentQuestion.correctAnswer.toLowerCase()) {
        resultElement.textContent = "Correct!";
        resultElement.className = "correct";
        score++;
        scoreElement.textContent = score;

        // Add a 1-second delay before moving to the next question
        setTimeout(() => {
            nextQuestion();
        }, 1000); // 1000 milliseconds = 1 second
    } else {
        resultElement.textContent = `Incorrect! The correct answer is: ${currentQuestion.correctAnswer}`;
        resultElement.className = "incorrect";
    }
}

function disableInputs() {
    // Disable all option buttons
    const optionButtons = document.querySelectorAll("#options button");
    optionButtons.forEach(button => {
        button.disabled = true;
        button.style.cursor = "not-allowed";
        button.style.opacity = "0.6";
    });

    // Disable the input field
    const userAnswerInput = document.getElementById("userAnswer");
    userAnswerInput.disabled = true;
}

function nextQuestion() {
    const resultElement = document.getElementById("result");
    const userAnswerInput = document.getElementById("userAnswer");

    // Clear result and input
    resultElement.textContent = "";
    userAnswerInput.value = "";

    // Move to the next question
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        const questionElement = document.getElementById("question");
        const optionsElement = document.getElementById("options");
        questionElement.textContent = "Quiz Completed!";
        optionsElement.innerHTML = "";
        userAnswerInput.style.display = "none";
        document.getElementById("score").textContent = `Final Score: ${score}/${questions.length}`;
        document.querySelector("button[onclick='nextQuestion()']").style.display = "none";
        document.querySelector(".container").classList.add("quiz-completed");
    }
}
