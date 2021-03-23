import Events from 'events'
import TerminalController from "./terminalController.js";



const componentEmmiter = new Events();

const controller = new TerminalController();
await controller.initializeTable(componentEmmiter)

