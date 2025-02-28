// Object.freeze используется для имитации поведения enum
export const Genders = Object.freeze({
    MALE: "male",
    FEMALE: "female",
    TRANSGENDER: "transgender"
});

export const NameCategories = {
    male: [Genders.MALE, Genders.TRANSGENDER],
    female: [Genders.FEMALE, Genders.TRANSGENDER],
    unisex: [Genders.MALE, Genders.FEMALE, Genders.TRANSGENDER],
};

export const NamePool = {
    male: [
        "Alexander", "Dominic", "Fabian",
        "Lysandre", "Orion", "Phoenix",
        "Valentino", "Caspian", "Magnus",
        "Atticus", "Evander", "Sebastian"
    ],
    female: [
        "Crystal", "Aurora", "Seraphina",
        "Isolde", "Elowen", "Vivienne",
        "Celestia", "Ophelia", "Genevieve",
        "Serenity", "Lorelei", "Amara"
    ],
    unisex: [
        "Sasha", "Riley", "Quinn",
        "Blaze", "Skyler", "Harley",
        "Azure", "Onyx", "Zephyr",
        "Marlowe", "Arden", "Reign"
    ]
};

