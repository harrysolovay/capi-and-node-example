import { System } from "@capi/polkadot"

System.Account
  .entryPage(10, null)
  .run()
  .then((x) => console.log(x))
