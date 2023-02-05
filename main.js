import transactions from "./transactions.json";
import Orm from "./utils/Orm.js";

/*
 * Process the given transactions,
 * create or update them in the database
 */
function processTransactions(transactions) {
  for (transaction in transactions) {
    if (Orm.exist("transactions", transaction.id)) {
      Orm.update("transactions", transaction.id, "label", transaction.label);
      Orm.update("transactions", transaction.id, "amount", transaction.amount);
    } else {
      Orm.create("transactions", transaction);
    }
  }
}

processTransactions(transactions);
