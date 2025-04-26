"use client";

import { useState } from 'react';

export default function QuizAppCombined() {
  const quizQuestions = [
    
        {
            "id": 1,
            "question": "As per Wildlife Protection Act 1972 (WPA 1972), wild life includes any animal, aquatic or land vegetation which forms part of any _____ .",
            "options": ["ecosystem", "state", "country", "habitat"],
            "correctAnswer": "habitat"
          },
          {
            "id": 2,
            "question": "The tiger has a home range of several square kilometres, regulates the ecosystem through controlling herbivore populations and trophic cascades, and people come to tiger reserves to watch tigers. Thus, the tiger can be called as",
            "options": ["umbrella species", "keystone species", "flagship species", "all of the above"],
            "correctAnswer": "all of the above"
          },
          {
            "id": 3,
            "question": "Soil formation is an example of",
            "options": ["provisioning service", "regulating service", "supporting service", "cultural service"],
            "correctAnswer": "supporting service"
          },
          {
            "id": 4,
            "question": "Zoo is an example of",
            "options": ["in-situ conservation", "ex-situ conservation", "in-situ preservation", "ex-situ preservation"],
            "correctAnswer": "ex-situ conservation"
          },
          {
            "id": 5,
            "question": "The fig tree bears fruits in times when animals do not have much access to food. In this context, it would be a good example of",
            "options": ["least concern species", "keystone species", "flagship species", "extinct species"],
            "correctAnswer": "keystone species"
          },
          {
            "id": 6,
            "question": "Nutrient cycling is an example of",
            "options": ["provisioning service", "regulating service", "supporting service", "cultural service"],
            "correctAnswer": "supporting service"
          },
          {
            "id": 7,
            "question": "People come to Sessa orchid sanctuary in Arunachal Pradesh to witness orchids, which in this context would be classified as",
            "options": ["umbrella species", "keystone species", "flagship species", "extinct species"],
            "correctAnswer": "flagship species"
          },
          {
            "id": 8,
            "question": "We prefer those areas for the creation of a conservation reserve where the level of threat is",
            "options": ["very high", "medium", "very low", "non-existent"],
            "correctAnswer": "medium"
          },
          {
            "id": 9,
            "question": "The elephant has a home range of several square kilometres, regulates the ecosystem by its habit of destructive feeding, and people can relate to this animal which is important for conservation. Given this background, the elephant can be called as",
            "options": ["umbrella species", "keystone species", "flagship species", "all of the above"],
            "correctAnswer": "all of the above"
          },
          {
            "id": 10,
            "question": "Biological control of pest populations is an example of",
            "options": ["provisioning service", "regulating service", "supporting service", "cultural service"],
            "correctAnswer": "regulating service"
          },
   
   
   {
        "id": 11,
        "question": "“An action taken by an uninformed party to induce an informed party to reveal information” is known as",
        "options": ["signalling", "screening", "informing", "heuristics"],
        "correctAnswer": "screening"
      },
      {
        "id": 12,
        "question": "“The part of actual resources that can be developed profitably in the future” are",
        "options": ["potential resources", "actual resources", "reserve resources", "stock resources"],
        "correctAnswer": "reserve resources"
      },
      {
        "id": 13,
        "question": "“The limit on the consumption bundles that a consumer can afford” is known as",
        "options": ["consumption constraint", "budget constraint", "bundle constraint", "affordability constraint"],
        "correctAnswer": "budget constraint"
      },
      {
        "id": 14,
        "question": "“Mental short cut using emotion (gut feeling) to influences the decision” is",
        "options": ["affect heuristic", "availability heuristic", "effort heuristic", "familiarity heuristic"],
        "correctAnswer": "affect heuristic"
      },
      {
        "id": 15,
        "question": "“Those resources that are currently being used after surveying, quantification and qualification” are",
        "options": ["potential resources", "actual resources", "reserve resources", "stock resources"],
        "correctAnswer": "actual resources"
      },
      {
        "id": 16,
        "question": "“The change in consumption that results when a price change moves the consumer along a given indifference curve to a point with a new marginal rate of substitution” is known as",
        "options": ["income effect", "substitution effect", "indifference effect", "budget effect"],
        "correctAnswer": "substitution effect"
      },
      {
        "id": 17,
        "question": "An inferior good whose demand increases with price is called as",
        "options": ["Normal good", "Veblen good", "Giffen good", "Demand good"],
        "correctAnswer": "Giffen good"
      },
      {
        "id": 18,
        "question": "Which of these is not a property of indifference curves?",
        "options": ["Higher indifference curves are preferred to lower ones", "Indifference curves are downward-sloping", "Indifference curves cross at right angles", "Indifference curves are bowed inwards"],
        "correctAnswer": "Indifference curves cross at right angles"
      },
      {
        "id": 19,
        "question": "“An action taken by an informed party to reveal private information to an uninformed party” is known as",
        "options": ["signalling", "screening", "informing", "heuristics"],
        "correctAnswer": "signalling"
      },
      {
        id: 20,
        question: "“Simple strategies or mental processes used to quickly form judgments, make decisions, and find solutions to complex problems” is known as",
        options: ["signalling", "screening", "informing", "heuristics"],
        correctAnswer: "heuristics"
      },
   
   {
        id: 21,
        question: "“an absolute level of income set by the government for each family size below which a family is deemed to be in poverty” is known as",
        options: ["deprivation line", "poverty line", "deprivation index", "poverty index"],
        correctAnswer: "poverty line"
      },
      {
        id: 22,
        question: "Absolute poverty depends",
        options: ["on income but not on access to social services", "not on income but on access to social services", "on income and on access to social services", "neither on income nor on access to social services"],
        correctAnswer: "on income and on access to social services"
      },
      {
        id: 23,
        question: "“the equipment and structures used to produce goods and services” is the definition of",
        options: ["tools", "machinery", "capital", "factors of production"],
        correctAnswer: "capital"
      },
      {
        id: 24,
        question: "“above-equilibrium wages paid by firms to increase worker productivity” are known as",
        options: ["compensating wage", "efficiency wage", "productivity wage", "retention wage"],
        correctAnswer: "efficiency wage"
      },
      {
        id: 25,
        question: "“government policy aimed at protecting people against the risk of adverse events” is",
        options: ["Social protection", "Social insurance", "Social security", "Socialism"],
        correctAnswer: "Social insurance"
      },
      {
        id: 26,
        question: "“a difference in wages that arises to offset the non-monetary characteristics of different jobs” is known as",
        options: ["differentiating differential", "compensating differential", "differentiating integral", "compensating integral"],
        correctAnswer: "compensating differential"
      },
      {
        id: 27,
        question: "For a competitive and profit-maximising firm,",
        options: ["each factor’s rental price < the value of the marginal product for that factor", "each factor’s rental price = the value of the marginal product for that factor", "each factor’s rental price > the value of the marginal product for that factor", "each factor’s rental price = the value of the average product for that factor"],
        correctAnswer: "each factor’s rental price = the value of the marginal product for that factor"
      },
      {
        id: 28,
        question: "“a condition characterised by severe deprivation of basic human needs, including food, safe drinking water, sanitation facilities, health, shelter, education and information” is known as",
        options: ["absolute poverty", "relative poverty", "median poverty", "poverty line"],
        correctAnswer: "absolute poverty"
      },
      {
        id: 29,
        question: "“a condition where a household’s income is lower than the median income in the particular country” is known as",
        options: ["absolute poverty", "relative poverty", "median poverty", "poverty line"],
        correctAnswer: "relative poverty"
      },
      {
        id: 30,
        question: "“the increase in the amount of output from an additional unit of labor” is",
        options: ["marginal product of labour", "marginal product of input", "average product of labour", "average product of input"],
        correctAnswer: "marginal product of labour"
      }
   ,
   {
        id: 31,
        question: "“costs that have already been committed and cannot be recovered” are",
        options: ["fixed costs", "variable costs", "marginal costs", "sunk costs"],
        correctAnswer: "sunk costs"
      },
      {
        id: 32,
        question: "“total revenue minus total cost, including both explicit and implicit costs” is a definition of",
        options: ["economic profit", "accounting profit", "profit", "loss"],
        correctAnswer: "economic profit"
      },
      {
        id: 33,
        question: "“the increase in total cost that arises from an extra unit of production” are",
        options: ["fixed costs", "variable costs", "marginal costs", "sunk costs"],
        correctAnswer: "marginal costs"
      },
      {
        id: 34,
        question: "A monopolist firm’s profit is given by",
        options: ["(Price - ATC) × Q", "(Price - Q) × ATC", "(ATC - Q) × Price", "Price × Q - ATC"],
        correctAnswer: "(Price - ATC) × Q"
      },
      {
        id: 35,
        question: "Which of the following is true for a competitive firm?",
        options: ["P > MR", "P > MC", "MR > MC", "MR = MC"],
        correctAnswer: "MR = MC"
      },
      {
        id: 36,
        question: "“the amount a firm receives for the sale of its output” is a definition of",
        options: ["total revenue", "total cost", "profit", "loss"],
        correctAnswer: "total revenue"
      },
      {
        id: 37,
        question: "When the cost of production for a single firm is much lesser than the cost of production for competitive firms, we have a / an",
        options: ["natural monopoly", "artificial monopoly", "oligopoly", "duopoly"],
        correctAnswer: "natural monopoly"
      },
      {
        id: 38,
        question: "“costs that do not vary with the quantity of output produced” are",
        options: ["fixed costs", "variable costs", "marginal costs", "sunk costs"],
        correctAnswer: "fixed costs"
      },
      {
        id: 39,
        question: "“costs that vary with the quantity of output produced” are",
        options: ["fixed costs", "variable costs", "marginal costs", "sunk costs"],
        correctAnswer: "variable costs"
      },
      {
        id: 40,
        question: "“the increase in output that arises from an additional unit of input” is",
        options: ["marginal product", "marginal profit", "marginal loss", "marginal cost"],
        correctAnswer: "marginal product"
      }
      ,
   {
        id: 41,
        question: "For a positive consumption externality,",
        options: ["SMB = PMB", "SMB = PMB − MD", "SMB = PMB + MB", "SMC = PMC / MD"],
        correctAnswer: "SMB = PMB + MB"
      },
      {
        id: 42,
        question: "For a positive production externality,",
        options: ["SMB = PMB", "SMB = PMB − MD", "SMB = PMB + MB", "SMC = PMC / MD"],
        correctAnswer: "SMB = PMB"
      },
      {
        id: 43,
        question: "The direct cost to producers of producing an additional unit of a good is",
        options: ["private marginal cost (PMC)", "social marginal cost (SMC)", "private marginal benefit (PMB)", "social marginal benefit (SMB)"],
        correctAnswer: "private marginal cost (PMC)"
      },
      {
        id: 44,
        question: "For a negative production externality,",
        options: ["SMC = PMC + MD", "SMC = PMC - MD", "SMC = PMC", "SMC = PMC - MB"],
        correctAnswer: "SMC = PMC + MD"
      },
      {
        id: 45,
        question: "The private marginal cost to producers plus any costs associated with the production of the good that are imposed on others is",
        options: ["private marginal cost (PMC)", "social marginal cost (SMC)", "private marginal benefit (PMB)", "social marginal benefit (SMB)"],
        correctAnswer: "social marginal cost (SMC)"
      },
      {
        id: 46,
        question: "Partying with loud noise is an example of",
        options: ["negative production externality", "positive production externality", "negative consumption externality", "positive consumption externality"],
        correctAnswer: "negative consumption externality"
      },
      {
        id: 47,
        question: "When an individual’s consumption increases the well-being of others, but the individual is not compensated by those others, we have",
        options: ["negative production externality", "positive production externality", "negative consumption externality", "positive consumption externality"],
        correctAnswer: "positive consumption externality"
      },
      {
        id: 48,
        question: "When a firm’s production increases the well-being of others but the firm is not compensated by those others, we have",
        options: ["negative production externality", "positive production externality", "negative consumption externality", "positive consumption externality"],
        correctAnswer: "positive production externality"
      },
      {
        id: 49,
        question: "When an individual’s consumption reduces the well-being of others who are not compensated by the individual, we have",
        options: ["negative production externality", "positive production externality", "negative consumption externality", "positive consumption externality"],
        correctAnswer: "negative consumption externality"
      },
      {
        id: 50,
        question: "For a negative consumption externality,",
        options: ["SMB = PMB", "SMB = PMB − MD", "SMB = PMB + MB", "SMC = PMC / MD"],
        correctAnswer: "SMB = PMB − MD"
      }
   ,
   {
            id: 51,
            question: "the price of a good that prevails in the world market for that good” is the definition of",
            options: ["export price", "import price", "world price", "domestic price"],
            correctAnswer: "world price"
          },
          {
            id: 52,
            question: "The area between the demand curve and the price is an indicator of",
            options: ["consumer surplus", "producer surplus", "total surplus", "deadweight loss"],
            correctAnswer: "consumer surplus"
          },
          {
            id: 53,
            question: "the amount a buyer is willing to pay for a good minus the amount the buyer actually pays for it is",
            options: ["consumer surplus", "producer surplus", "total surplus", "deadweight loss"],
            correctAnswer: "consumer surplus"
          },
          {
            id: 54,
            question: "the amount a seller is paid for a good minus the seller’s cost of providing it is",
            options: ["consumer surplus", "producer surplus", "total surplus", "deadweight loss"],
            correctAnswer: "producer surplus"
          },
          {
            id: 55,
            question: "Value to buyers - Cost to sellers is",
            options: ["consumer surplus", "producer surplus", "total surplus", "deadweight loss"],
            correctAnswer: "total surplus"
          },
          {
            id: 56,
            question: "the fall in total surplus that results from a market distortion, such as a tax is",
            options: ["consumer surplus", "producer surplus", "total surplus", "deadweight loss"],
            correctAnswer: "deadweight loss"
          },
          {
            id: 57,
            question: "Laffer's curve is the relationship between",
            options: ["inflation and unemployment", "tax size and tax revenue", "producer surplus and consumer surplus", "tax size and deadweight loss"],
            correctAnswer: "tax size and tax revenue"
          },
          {
            id: 58,
            question: "Imposition of tariff",
            options: ["increases producer surplus and government revenue", "increases consumer surplus and government revenue", "increases producer surplus, consumer surplus and government revenue", "increases total surplus"],
            correctAnswer: "increases producer surplus and government revenue"
          },
          {
            id: 59,
            question: "the maximum amount that a buyer will pay for a good is",
            options: ["willingness to pay", "market demand", "demand curve", "buyer’s surplus"],
            correctAnswer: "willingness to pay"
          },
          {
            id: 60,
            question: "The area between the supply curve and the price is an indicator of",
            options: ["consumer surplus", "producer surplus", "total surplus", "deadweight loss"],
            correctAnswer: "producer surplus"
          }
   
   ,
   {
            id: 61,
            question: "“the claim that, other things being equal, the quantity demanded of a good falls when the price of the good rises” is a statement of",
            options: ["law of demand", "law of supply", "law of quantity demanded", "law of quantity supplied"],
            correctAnswer: "law of demand"
          },
          {
            "id": 62,
            "question": "“a legal maximum on the price at which a good can be sold” is",
            "options": ["price ceiling", "price floor", "selling ceiling", "selling floor"],
            "correctAnswer": "price ceiling"
          },
          {
            "id": 63,
            "question": "“a good for which, other things being equal, an increase in income leads to a decrease in demand” is",
            "options": ["normal good", "inferior good", "Giffen good", "common good"],
            "correctAnswer": "inferior good"
          },
          {
            "id": 64,
            "question": "“a table that shows the relationship between the price of a good and the quantity supplied” is",
            "options": ["demand table", "demand schedule", "supply table", "supply schedule"],
            "correctAnswer": "supply schedule"
          },
          {
            "id": 65,
            "question": "“a graph of the relationship between the price of a good and the quantity demanded” is",
            "options": ["demand curve", "supply curve", "Laffer's curve", "Phillips curve"],
            "correctAnswer": "demand curve"
          },
          {
            "id": 66,
            "question": "“a table that shows the relationship between the price of a good and the quantity demanded” is",
            "options": ["demand table", "demand schedule", "supply table", "supply schedule"],
            "correctAnswer": "demand schedule"
          },
          {
            "id": 67,
            "question": "“a measure of how much the quantity demanded of one good responds to a change in the price of another good, computed as the percentage change in quantity demanded of the first good divided by the percentage change in price of the second good” is",
            "options": ["price elasticity of demand", "income elasticity of demand", "cross-price elasticity of demand", "price elasticity of supply"],
            "correctAnswer": "cross-price elasticity of demand"
          },
          {
            "id": 68,
            "question": "Rice and wheat are",
            "options": ["substitutes", "complements", "club goods", "public goods"],
            "correctAnswer": "substitutes"
          },
          {
            "id": 69,
            "question": "“a good for which, other things being equal, an increase in income leads to an increase in demand” is",
            "options": ["normal good", "inferior good", "Giffen good", "common good"],
            "correctAnswer": "normal good"
          },
          {
            "id": 70,
            "question": "“a measure of how much the quantity demanded of a good responds to a change in the price of that good, computed as the percentage change in quantity demanded divided by the percentage change in price” is",
            "options": ["price elasticity of demand", "income elasticity of demand", "cross-price elasticity of demand", "price elasticity of supply"],
            "correctAnswer": "price elasticity of demand"
          }
   ,
   {
          id: 71,
          question: "“a measure of the responsiveness of quantity demanded or quantity supplied to a change in one of its determinants” is",
          options: ["elasticity", "responsivity", "demand-supply equilibrium", "pricing"],
          correctAnswer: "elasticity"
        },
        {
          id: 72,
          question: "“the ability to produce a good using fewer inputs than another producer” is",
          options: ["comparative advantage", "absolute advantage", "production advantage", "resource advantage"],
          correctAnswer: "absolute advantage"
        },
        {
          id: 73,
          question: "Common resource goods are",
          options: ["excludable, rival in consumption", "non-excludable, rival in consumption", "excludable, non-rival in consumption", "non-excludable, non-rival in consumption"],
          correctAnswer: "non-excludable, rival in consumption"
        },
        {
          id: 74,
          question: "“If private parties can bargain without cost over the allocation of resources, they can solve the problem of externalities on their own.” This is a statement for",
          options: ["Allocation theorem", "Phillips theorem", "Coase theorem", "Nash theorem"],
          correctAnswer: "Coase theorem"
        },
        {
          id: 75,
          question: "Development that meets the needs of the present without compromising the ability of future generations to meet their own needs is known as",
          options: ["Good development", "Sustainable development", "Futuristic development", "Gandhian development"],
          correctAnswer: "Sustainable development"
        },
        {
          id: 76,
          question: "Club goods are",
          options: ["excludable, rival in consumption", "non-excludable, rival in consumption", "excludable, non-rival in consumption", "non-excludable, non-rival in consumption"],
          correctAnswer: "excludable, non-rival in consumption"
        },
        {
          id: 77,
          question: "Which of these is not a method of internalisation of externalities?",
          options: ["tradable pollution permits", "charities to social causes", "command-and-control policies", "free market"],
          correctAnswer: "free market"
        },
        {
          id: 78,
          question: "Private goods are",
          options: ["excludable, rival in consumption", "non-excludable, rival in consumption", "excludable, non-rival in consumption", "non-excludable, non-rival in consumption"],
          correctAnswer: "excludable, rival in consumption"
        },
        {
          id: 79,
          question: "“a simplified description, especially a mathematical one, of a system or process, to assist calculations and predictions” is the definition of a / an",
          options: ["equation", "model", "philosophy", "process dynamics"],
          correctAnswer: "model"
        },
        {
          id: 80,
          question: "“the impact of one person’s actions on the well-being of a bystander” is",
          options: ["actor-observer effect", "externality", "internality", "benefits principle"],
          correctAnswer: "externality"
        }
   ,
   {
          id: 81,
          question: "Which of these is a deterministic factor?",
          options: ["environmental variation", "forest fire", "death rate", "diseases"],
          correctAnswer: "death rate"
        },
        {
          id: 82,
          question: "I tried growing vegetables under my teak plantation, but the vegetable plants died out. I should be concerned about",
          options: ["autophagy", "allelophagy", "autopathy", "allelopathy"],
          correctAnswer: "allelopathy"
        },
        {
          id: 83,
          question: "The movement of lions across the Gir landscape is an example of",
          options: ["diffusion", "secular dispersal", "jump dispersal", "drifting"],
          correctAnswer: "diffusion"
        },
        {
          id: 84,
          question: "\"The geographical distribution of a species will be controlled by that environmental factor for which the organism has the narrowest range of tolerance.\" This is the statement for",
          options: ["Liebig’s law of the minimum", "Liebig’s law of the maximum", "Shelford’s law of tolerance", "Shelford’s law of intolerance"],
          correctAnswer: "Shelford’s law of tolerance"
        },
        {
          id: 85,
          question: "The regular, seasonal movement of animals, often along fixed routes is called",
          options: ["translocation", "migration", "dispersal", "drifting"],
          correctAnswer: "migration"
        },
        {
          id: 86,
          question: "Which of these is a stochastic factor?",
          options: ["birth rate", "death rate", "population structure", "environmental fluctuation"],
          correctAnswer: "environmental fluctuation"
        },
        {
          id: 87,
          question: "The movement of individuals away from their place of birth or hatching or seed production into a new habitat or area to survive and reproduce is called",
          options: ["translocation", "migration", "dispersal", "drifting"],
          correctAnswer: "dispersal"
        },
        {
          id: 88,
          question: "Scarcity of food is a",
          options: ["chemical factor", "demographic factor", "push factor", "pull factor"],
          correctAnswer: "push factor"
        },
        {
          id: 89,
          question: "Which of these correctly represents the process of habitat fragmentation and loss?",
          options: [
            "Original forest → Dissection → Perforation → Fragmentation → Attrition",
            "Original forest → Dissection → Attrition → Fragmentation → Perforation",
            "Original forest → Dissection → Perforation → Attrition → Fragmentation",
            "Original forest → Dissection → Fragmentation → Perforation → Attrition"
          ],
          correctAnswer: "Original forest → Dissection → Perforation → Fragmentation → Attrition"
        },
        {
          id: 90,
          question: "A root zone treatment plant is an example of",
          options: ["phytoremediation", "biological control", "biomagnification", "bioaccumulation"],
          correctAnswer: "phytoremediation"
        }
   ,
   {
        id: 91,
        question: "___ is used to identify which potential impacts are relevant to assess. (Fill in the blank)",
        options: ["screening", "scoping", "reporting", "review"],
        correctAnswer: "scoping"
      },
      {
        id: 92,
        question: "“the potential or capacity of a material to have adverse effects on living organisms” is",
        options: ["vulnerability", "susceptibility", "sustainability", "toxicity"],
        correctAnswer: "toxicity"
      },
      {
        id: 93,
        question: "A deciduous forest in Madhya Pradesh was converted to a mine. After the mining operations were over, the pits were filled up with soil and species of deciduous forest planted again. This is an example of",
        options: ["recovery", "restoration", "enhancement", "replacement"],
        correctAnswer: "restoration"
      },
      {
        id: 94,
        question: "Hydrocarbons derived from incomplete burning of mineral oils are",
        options: ["petrogenic hydrocarbons", "pyrogenic hydrocarbons", "biogenic hydrocarbons", "chemoenic hydrocarbons"],
        correctAnswer: "pyrogenic hydrocarbons"
      },
      {
        id: 95,
        question: "A deciduous forest in Madhya Pradesh was converted to a mine. After the mining operations were over, the pits were filled up with water and a lake was created. It is now visited by several migratory birds. This is an example of",
        options: ["recovery", "restoration", "enhancement", "replacement"],
        correctAnswer: "replacement"
      },
      {
        id: 96,
        question: "“the relative effect of exposure” is",
        options: ["vulnerability", "sensitivity", "sustainability", "toxicity"],
        correctAnswer: "sensitivity"
      },
      {
        id: 97,
        question: "___ determines which projects or developments require a full or partial impact assessment study. (Fill in the blank)",
        options: ["screening", "scoping", "reporting", "review"],
        correctAnswer: "screening"
      },
      {
        id: 98,
        question: "“the extent to which a chemical is available for uptake into an organism” is",
        options: ["bioavailability", "bioaccumulation", "biomagnification", "bioresponse"],
        correctAnswer: "bioavailability"
      },
      {
        id: 99,
        question: "Hydrocarbons derived from biological processes acting on mineral oils are",
        options: ["petrogenic hydrocarbons", "pyrogenic hydrocarbons", "biogenic hydrocarbons", "chemoenic hydrocarbons"],
        correctAnswer: "biogenic hydrocarbons"
      },
      {
        id: 100,
        question: "“Any changes in natural or human systems that inadvertently increase vulnerability to climatic stimuli; an adaptation that does not succeed in reducing vulnerability but increases it instead” is a definition for",
        options: ["adaptation", "mitigation", "maladaptation", "malmitigation"],
        correctAnswer: "maladaptation"
      }
   ,
   {
          id: 101,
          question: "Which of these is not a pillar of sustainability?",
          options: ["environmental sustainability", "economic sustainability", "trans-boundary sustainability", "social sustainability"],
          correctAnswer: "trans-boundary sustainability"
        },
        {
          id: 102,
          question: "The Trinity explosion of 1945 is taken as the beginning of the",
          options: ["Holocene", "Cenocene", "Anthropocene", "Eocene"],
          correctAnswer: "Anthropocene"
        },
        {
          id: 103,
          question: "According to Malthusian model,",
          options: [
            "Population grows in geometric progression, food supply increases in arithmetic progression",
            "Population grows in geometric progression, food supply increases in geometric progression",
            "Population grows in arithmetic progression, food supply increases in arithmetic progression",
            "Population grows in arithmetic progression, food supply increases in geometric progression"
          ],
          correctAnswer: "Population grows in geometric progression, food supply increases in arithmetic progression"
        },
        {
          id: 104,
          question: "The demographic transition sees a society move from",
          options: [
            "high birth rate, low death rate to low birth rate, high death rate",
            "low birth rate, high death rate to low birth rate, low death rate",
            "high birth rate, high death rate to low birth rate, low death rate",
            "high birth rate, high death rate to low birth rate, high death rate"
          ],
          correctAnswer: "high birth rate, high death rate to low birth rate, low death rate"
        },
        {
          id: 105,
          question: "Which of these is a pillar of sustainability",
          options: ["social sustainability", "industrial sustainability", "agricultural sustainability", "trans-boundary sustainability"],
          correctAnswer: "social sustainability"
        },
        {
          id: 106,
          question: "Which of these is a preventive check according to Malthus?",
          options: ["foresight", "vice", "misery", "flood"],
          correctAnswer: "foresight"
        },
        {
          id: 107,
          question: "The quantum of human impacts can be written as",
          options: ["I = P + A + T", "I = P X A + T", "I = P X A X T", "I = P + A X T"],
          correctAnswer: "I = P X A X T"
        },
        {
          id: 108,
          question: "The book \"An Essay on the Principle of Population\" was written by",
          options: ["Darwin", "Malthus", "Spencer", "Owens"],
          correctAnswer: "Malthus"
        },
        {
          id: 109,
          question: "The logistic growth equation curve is",
          options: ["I-shaped", "J-shaped", "S-shaped", "U-shaped"],
          correctAnswer: "S-shaped"
        },
        {
          id: 110,
          question: "Which of these is a positive check according to Malthus?",
          options: ["late marriage", "war", "celibacy", "moral restraint"],
          correctAnswer: "war"
        },
   {
        id: 111,
        question: "In the word root for conservation, 'con' stands for",
        options: [ "together","to keep","house","manage"],
        correctAnswer: "together"
      },
      {
        id: 112,
        question: "“the ability of a single economic actor (or small group of actors) to have a substantial influence on market prices” is known as",
        options: [ "price power","market power","externality","economic power"],
        correctAnswer: "market power"
      },
      {
        id: 113,
        question: "“an economy that allocates resources through the decentralised decisions of many firms and households as they interact in markets for goods and services” is a / an",
        options: ["urban economy","rural economy","planned economy","market economy"],
        correctAnswer: "market economy"
      },
      {
        id: 114,
        question: "In the word root for conservation, servare stands for ",
        options: ["together","to keep","house","manage"],
        correctAnswer: "to keep"
      },
      {
        id: 115,
        question: "Which of these is true??",
        options: ["Wants are unlimited, resources are unlimited","Wants are limited, resources are limited", "Wants are unlimited, resources are limited","Wants are limited, resources are unlimited"],
        correctAnswer: "Wants are unlimited, resources are limited"
      },
      {
        id: 116,
        question: "“an increase in the overall level of prices in the economy” is",
        options: ["inflation", "deflation", "stagflation", "priceflation"],
        correctAnswer: "inflation"
      },
      {
        id: 117,
        question: "Phillips curve shows the relation between",
        options: ["profit and loss", "marked price and selling price", "inflation rate and unemployment rate", "electricity consumption and heat output"],
        correctAnswer: "inflation rate and unemployment rate"
      },
      {
        id: 118,
        question: "In the word root for Economics, oikos stands for",
        options: ["together", "to keep", "house", "manage"],
        correctAnswer: "house"
      },
      {
        id: 119,
        question: "Most of rational thinking occurs",
        options: ["before the margin", "at the margin", "after the margin", "none of these"],
        correctAnswer: "at the margin"
      },
      {
        id: 120,
        question: "Input costs that do not require an outlay of money are",
        options: ["explicit costs", "implicit costs", "opportunity costs", "phantom costs"],
        correctAnswer: "implicit costs"
      },
  ];

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleOptionSelect = (questionId, option) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: option
    });
  };

  const calculateScore = () => {
    let correctCount = 0;
    
    quizQuestions.forEach(question => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correctCount++;
      }
    });
    
    setScore(correctCount);
    setSubmitted(true);
  };

  const resetQuiz = () => {
    setSelectedAnswers({});
    setScore(null);
    setSubmitted(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 rounded-lg shadow-lg">
    <h1 className="text-5xl font-bold text-center mb-8">Conservation Economics</h1>
      <h1 className="text-3xl font-bold text-center mb-8">Week 12</h1>
      
      <div className="space-y-8 max-h- overflow-y-auto p-4 mb-6">
        {quizQuestions.map(question => (
          <div key={question.id} className="border-b pb-6">
            <h2 className="text-xl font-semibold mb-3">
              {question.id}. {question.question}
            </h2>
            <div className="space-y-2">
              {question.options.map((option, index) => (
                <div key={index} className="flex items-center">
                  <input
                    type="radio"
                    id={`q${question.id}-${index}`}
                    name={`question-${question.id}`}
                    value={option}
                    checked={selectedAnswers[question.id] === option}
                    onChange={() => handleOptionSelect(question.id, option)}
                    disabled={submitted}
                    className="mr-2"
                  />
                  <label 
                    htmlFor={`q${question.id}-${index}`}
                    className={`${
                      submitted && option === question.correctAnswer 
                        ? 'text-green-600 font-medium' 
                        : submitted && selectedAnswers[question.id] === option && option !== question.correctAnswer 
                          ? 'text-red-600 font-medium' 
                          : ''
                    }`}
                  >
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {!submitted ? (
        <button 
          onClick={calculateScore}
          className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          Submit Quiz
        </button>
      ) : (
        <div className="text-center">
          <div className="text-2xl font-bold mb-4">
            Your Score: {score} out of {quizQuestions.length}
          </div>
          <button 
            onClick={resetQuiz}
            className="px-6 py-2 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors"
          >
            Take Quiz Again
          </button>
        </div>
      )}
    </div>
  );
}