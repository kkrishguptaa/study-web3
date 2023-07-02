![cover image](https://github.com/krishstwt/learning/assets/135469703/b7ddff77-f66c-46c8-a950-9922409516dc)

# 📚 DAPP Study Resources

DAPP Study Resources aims to be the largest collection of resources to learn web3, we want to include every resource that one would need to make a great web3 application. Currently the datasource is open source contributions made into the repository's data files which will also act as a great entry contribution for newbies.

## 🚀 Check out deployed

[![deployed](https://github.com/krishstwt/learning/assets/135469703/9ff73f98-282c-49c0-867b-d031dc064d4e)](https://dapp-study-resources.vercel.app).

[dapp-study-resources.vercel.app](https://dapp-study-resources.vercel.app) is the official deployed site


## 💥 Run it locally

1. Install [Node.js](https://nodejs.org/en/)
2. Install [Git](https://git-scm.com/downloads)
3. Clone the repository: `git clone https://github.com/krishstwt/dapp-study-resources`
4. Install dependencies `npm i -g yarn` `yarn install --frozen-lockfile`
5. Run the app `yarn start`
6. The app will be served at `localhost:3000`

## ORIGIN: Web3Apps Hackathon w/ MLH

### Inspiration

Inspired by Futurepedia a list of all the cool AI Tools, I thought that we should have a extensive list of web3 learning resources as well.

### What It Does

It is a project that is meant to gain resources via Open Source Contributions to the `data/resources.json` file and then display them in a nice way, that will allow users to learn about various resources from it.

### How We Built It

It is built using a create-next-app template and then using the data from the `data/resources.json` file to display the resources.

For the styling we've used TailwindCSS paired with ShadCN UI which itself brings in Radix UI.

We also used GitHub for the open source contributions, release management, ticket management (future), deployment (CD via the vercel github integration) and version control. GitHub's Education Pack was extremely helpful with resources such as Copilot that were used extensively for productivity enhancement.

We also used Porkbun for the domain name (daap.study) and Vercel for the deployment.
