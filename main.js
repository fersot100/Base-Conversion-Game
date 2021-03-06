const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');

let mainWindow;

function createWindow(){
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600
	});
	mainWindow.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file',
		slashes: true
	}));
}

app.on('ready', createWindow);
app.on('window-all-close', ()=>{
	if(system.platform != 'Darwin'){
		app.quit();
	}
});
app.on('activate', ()=>{
	if(mainWindow === null){
		createWindow();
	}
});
