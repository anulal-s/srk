import Head from 'next/head';
import { getSnippetById } from '../../utils/Fauna';
import MedicineForm from '../../components/MedicineForm';

export default function Home({ snippet }) {
    return (
        <div>
            <Head>
                <title>Update Next Snippet</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="max-w-lg mx-auto">
                <h1 className="text-red-100 text-2xl mb-4">Update Snippet</h1>
                <MedicineForm snippet={snippet} />
            </main>
        </div>
    );
}

export async function getServerSideProps(context) {
    try {
        //TODO: Get and return snippet as prop
        console.log(context.params, 'context.params');
        
        const snippet = await getSnippetById(context.params.id);
        console.log(snippet, 'snippet');
        return {
            props: {snippet},
        };
    } catch (error) {
        console.error(error);
        context.res.statusCode = 302;
        context.res.setHeader('Location', `/`);
        return { props: {} };
    }
}