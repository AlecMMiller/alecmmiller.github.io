import { IPosition } from "../interfaces";

const Ifit: IPosition = {
    company: "iFit",
    role: "Backend Engineer",
    start: { month: 4, year: 2021 },
    end: { month: 2, year: 2022 },
    notes: [
        "Creation and modification of RESTful APIs in TypeScript",
        "Created framework of new microservice for storing new workout type",
        "Maintenance of DAOs with Prisma ORM",
        "Maintenance of internal React admin tool",
        "Creation of data backfill and validation scripts",
        "Ensured 100% coverage of services with Jest unit testing"
    ]
}

const MicrochipApps: IPosition = {
    company: "Microchip",
    role: "Applications Engineer",
    start: { month: 5, year: 2018 },
    end: { month: 4, year: 2021 },
    notes: [
        "Creation of Python GUIs for internal use to aid with development such as Git workflow automation and standalone device programming tool",
        "Made use of YouTube APIs to control an embedded device with commands from livestream chat via a Python program",
        "Worked with stakeholders in various business units to create data pipeline to migrate content from multiple legacy formats to new consolidated format",
        "Created flow for generation, population, and interaction with SQL database based on schema files through a web interface",
        "Automaton of report generation from JIRA into a PowerPoint presentation for management",
        "Administration of Linux servers for various internal tools",
        "Creation of trade show demos, both software and physical components",
        "Writing example code to demonstrate product usage to customer, and associated application notes describing the project"
    ]
}

const MicrochipIntern: IPosition = {
    company: "Microchip",
    role: "Intern",
    start: { month: 10, year: 2017 },
    end: { month: 5, year: 2018 },
    notes: [
        "Maintenance of TCP/IP networking stack",
        "Interaction with IoT sensors via CoAP protocol in Python",
        "Development of embedded drivers in C and associated driver generation GUIs in Java",
        "Creation of example content and associated documentation",
        "Collection and analysis of test data with Python"
    ]
}

export const pastRoles = [Ifit, MicrochipApps, MicrochipIntern];