const SUPABASE_URL = 'https://gxwgjhfyrlwiqakdeamc.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjQxMTMxMiwiZXhwIjoxOTUxOTg3MzEyfQ.PHekiwfLxT73qQsLklp0QFEfNx9NlmkssJFDnlvNIcA';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getDogs() {
    // from the dogs table, select all items
    const query = client.from('dogs').select('*').limit(100);
    // and return the response
    const response = await query;
    return response;
}

export async function getDog(id) {
    // grab all dogs
    let query = client.from('dogs').select('*').limit(100);
    // match dog to specific id,
    query = query.eq('id', id);
    const response = await query;
    // and return just the data from the response
    return response.data[0];
    // I know I should be selecting the dog by id in the query but I want my code to be at least a little different from the demo code okay
}
