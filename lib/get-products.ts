const Airtable = require("airtable")

const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
}).base(process.env.AIRTABLE_BASE_ID)

const table = base(process.env.AIRTABLE_TABLE_NAME)

export default async function getProduts() {
  const records = await table.select({}).all()

  console.log(records)

  return records
}
