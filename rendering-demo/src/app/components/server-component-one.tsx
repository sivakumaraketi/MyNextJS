import fs from 'fs';
const ServerComponentOne = () => {
    fs.readFileSync('/Users/sivakumaraketi/Desktop/test.rtf', 'utf8');
    return (
        <div>
        <h1>Server Component One</h1>
        <p>This is a server component.</p>
        </div>
    );
}
export default ServerComponentOne;