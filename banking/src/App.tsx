import { useState,type SyntheticEvent } from "react";

class Account{

  username:string;
  password:string;
  balance:number;

  constructor(

    username: string,
    password: string,
    balance: number
  
  ){
    this.username = username;
    this.password = password;
    this.balance = balance;
  }

  addbalance(amount:number) {
    this.balance+=amount
  }

  withdraw( amount:number ){
    if(amount< this.balance){
      this.balance-=amount
    }
  }

  getDetails() {
    return `${this.username} - ₹${this.balance}`;
  }
}

const App = () => {

  
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [balance, setBalance] = useState<number>(0);
  const [nav, setnav] = useState<string>("")
  

  const handleCreateAccount = (e:SyntheticEvent)=>{
    e.preventDefault();
    const newAccount = new Account(
      username,
      password,
      balance,
    )
    setAccounts([...accounts,newAccount])
  }
  const navlist = ["create account","Deposit Money","Check balance","View Account","Withdraw Money"]

  return (
    <div className="App bg-black text-white min-h-screen">

      <header className="App-header display flex flex-col items-center justify-center">
        <h1 className="text-3xl">Banking App</h1>
      </header>
      
      <nav>
        <ul className=" absolute top-40  left-0 bg-gray-900 border border-amber-400 rounded-lg shadow-lg flex flex-col p-4 gap-2">
          {
            navlist.map((item)=>(
              
              <li onClick={()=>(setnav(item) )} className={`p-3 rounded cursor-pointer ${
                    nav === item
                      ? "bg-amber-400 text-black"
                      : "hover:bg-amber-300 hover:text-black"
                  }`}
                key={item}>
                {item}
              </li>
            ))
          }
        </ul>
      </nav>

      <main>
        {
          nav === "create account" &&(
            <div>
              <div>
                <h2 className="text-2xl text-center mt-10">Create a bank account</h2>
              </div>
              <form onSubmit={handleCreateAccount} className="max-w-sm mx-auto mt-10 p-6 bg-gray-950 border border-amber-200 shadow-xl rounded">
                <label htmlFor="username">Username:</label>

                  <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" className="border border-gray-300 rounded p-2 mb-4 w-full" />
                
                <label htmlFor="password">Password:</label>  
                
                  <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="border border-gray-300 rounded p-2 mb-4 w-full" />

                <label htmlFor="balance">Balance:</label>
                
                  <input type="number" id="balance" value={balance} onChange={(e) => setBalance(Number(e.target.value))} placeholder="Balance" className="border border-gray-300 rounded p-2 mb-4 w-full" />
                  
                <button type="submit" className="bg-blue-500 text-white rounded p-2 w-full">Create Account</button>
              </form>

            </div>
          )
        }

        {
          nav === "Deposit Money" &&(
            <div>
              
            </div>
          )
        }
          


      </main>

    </div>
  )
}

export default App