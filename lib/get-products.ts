import Airtable from "airtable"

interface Record {
  id: string
  fields: any
}

const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY as string,
}).base(process.env.AIRTABLE_BASE_ID as string)

const table = base(process.env.AIRTABLE_TABLE_NAME as string)

function getMinifiedRecords(records: ReadonlyArray<Record>): Record[] {
  return records.map(function (record: Record) {
    return minifyRecord(record)
  })
}

function minifyRecord(record: Record): Record {
  return {
    id: record.id,
    fields: record.fields,
  }
}

export async function getProducts(): Promise<Record[]> {
  const records: ReadonlyArray<Record> = (await table
    .select({})
    .all()) as ReadonlyArray<Record>

  const minifiedRecords: Record[] = await getMinifiedRecords(records)

  console.log(minifiedRecords)

  return minifiedRecords
}
