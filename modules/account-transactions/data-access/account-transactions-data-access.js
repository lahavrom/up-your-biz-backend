const { AccountTransaction } = require("../../../storage/database/models");

async function submitAccountTransaction(values) {
  return await AccountTransaction.create(values);
}

async function submitMultipleAccountTransactions(values) {
  return await AccountTransaction.bulkCreate(values);
}

async function fetchAllAccountTransactionsByAccountId(accountId) {
  return await AccountTransaction.findAll({
    where: {
      accountId,
    },
  });
}

module.exports = {
  submitAccountTransaction,
  submitMultipleAccountTransactions,
  fetchAllAccountTransactionsByAccountId,
};