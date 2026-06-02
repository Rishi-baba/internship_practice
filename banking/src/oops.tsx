import { useState } from "react";

class Account {
  username: string;
  password: string;
  balance: number;

  constructor(
    username: string,
    password: string,
    balance: number
  ) {
    this.username = username;
    this.password = password;
    this.balance = balance;
  }

  getDetails() {
    return `${this.username} - ₹${this.balance}`;
  }
}

function App() {
  const [accounts, setAccounts] = useState<Account[]>([]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [balance, setBalance] = useState(0);

  const handleCreateAccount = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const newAccount = new Account(
      username,
      password,
      balance
    );

    setAccounts([...accounts, newAccount]);

    setUsername("");
    setPassword("");
    setBalance(0);
  };

  return (
    <div className="bg-black text-white min-h-screen p-10">
      <h1 className="text-4xl text-center mb-10">
        Banking App
      </h1>

      <form
        onSubmit={handleCreateAccount}
        className="max-w-md mx-auto p-6 border border-amber-300 rounded-lg bg-gray-900"
      >
        <h2 className="text-2xl mb-4">
          Create Account
        </h2>

        <label>Username</label>

        <input
          type="text"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
          className="w-full p-2 mb-4 text-white border rounded"
        />

        <label>Password</label>

        <input
          type="password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full p-2 mb-4 text-white border rounded"
        />

        <label>Initial Balance</label>

        <input
          type="number"
          value={balance}
          onChange={(e) =>
            setBalance(Number(e.target.value))
          }
          className="w-full p-2 mb-4 text-white border rounded"
        />

        <button
          type="submit"
          className="w-full bg-amber-500 text-black p-2 rounded"
        >
          Create Account
        </button>
      </form>

      <div className="max-w-md mx-auto mt-10">
        <h2 className="text-2xl mb-4">
          Accounts
        </h2>

        {accounts.map((account) => (
          <div
            key={account.username}
            className="border p-3 rounded mb-2"
          >
            {account.getDetails()}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;