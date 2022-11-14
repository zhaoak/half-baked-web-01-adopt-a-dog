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
    // from the dogs table, select a single dog who has the matching id
    let query = client.from('dogs').select('*').limit(100);
    query = query.eq('id', id);
    const response = await query;
    // and return the response
    return response;
}
