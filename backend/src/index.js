import app from './app';
import './database';

app.listen(app.get('port'));

console.log('server running', app.get('port'))