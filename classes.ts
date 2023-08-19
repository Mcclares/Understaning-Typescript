abstract class Department {
    // private id: string;
    // private firstName: string;
    protected employees: string[] = [];
    constructor(protected readonly id: string ,public firstName:string) {
    
    }
    abstract describe(this: Department): void; 
    
    

    static createEmployee(employeeName: string) {
        return { employeeName };
    }
    addEmployee(employee: string) {
        this.employees.push(employee);

    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
    helloMyBuddy(st: string) {
        console.log(st);
    }
}
class ITDepartment extends Department {
    admins: string[];
    constructor(id:string, admins: string[]) {
        super(id, "It");
        this.admins = admins;

    }
    describe(): void {
        console.log("IT department - " + this.id);
    }

}
class AccountingDepartment extends Department {

    private lastReport: string;
    private static instance: AccountingDepartment;

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("LastReport value is not assignable");
        
    }
    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error("Please pass a value!");
        }
        this.addReport(value);

    }

    private constructor(id: string, private reports: string[]) {
        super(id, "Acounting");
        this.lastReport = reports[0];
    }

    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment("d2", []);
        return this.instance;

    }
    addReport(text: string) {
        this.reports.push(text);    
        this.lastReport = text;
    }
    getReport() {
        console.log(this.reports);
    }
    addEmployee(name: string) {
        if (name === "Max") return;
        this.employees.push(name);
    }
    describe() {
        console.log("Accounting Department - ID:" + this.id);
    }
}

const it = new ITDepartment("d1", ['Max']);

const maaa = Department.createEmployee("Maxa");
console.log(maaa);

it.addEmployee("max");
it.addEmployee("amanda");
it.firstName = "BANANA";
// a.employees[2] = "asas";
it.printEmployeeInformation();
it.describe();
console.log(it);
// const accounting = new AccountingDepartment("d2", ["Hello"]);
const accounting = AccountingDepartment.getInstance();

accounting.mostRecentReport = "Year is report";
console.log(accounting.mostRecentReport);

accounting.addReport("world");
accounting.getReport();
accounting.addEmployee("Manu");
accounting.addEmployee("Max");
accounting.describe();
// accounting.printEmployeeInformation()
// const describeCopy = { firstName:"salo", describe: a.describe } // всегла
// describeCopy.describe();
// describeCopy.firstName = "AMANDA";
// describeCopy.describe();