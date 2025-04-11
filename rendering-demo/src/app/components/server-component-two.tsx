import fs from 'fs';
import ClientComponentTwo from './client-component-two';

const ServerComponentTwo = () => {
    fs.readFileSync('/Users/sivakumaraketi/Desktop/test.rtf', 'utf8');
    return (
        <div>
        <h1>Server Component Two</h1>
        <ClientComponentTwo />
        </div>
    );
}
export default ServerComponentTwo;