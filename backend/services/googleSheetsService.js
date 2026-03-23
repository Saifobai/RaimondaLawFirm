import { sheets } from "../config/googleSheets.js";

export const appendAnfrageRow = async (data) => {
    const values = [[
        new Date().toISOString(),
        data.firstname,
        data.lastname,
        data.email,
        data.phone,
        data.debt,
        data.claims,
        data.income,
        data.marital,
        data.children,
        data.jobField,
        data.job,
        data.unemployed,
        data.selfEmployed,
        data.garnished,
        data.vehicle,
        data.property,
        data.knowCreditors,
        data.notes,
    ]];

    const response = await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range: "Anfragen!A1",
        valueInputOption: "USER_ENTERED",
        resource: { values },
    });

    return response;
};