This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started
Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Project
This is a medication reminder app for caregivers. It's a simple app that allows caregivers to add medications for their recipients. It also allows caregivers to mark medications as taken.

This design supports both a light and dark theme.

### Tradeoffs

#### BE/API layer
I spun my wheels for a while at the beginning trying to get the DB and API working. I'm not sure how much time I spent on this, but it was more than I expected. Ultimately, I decided to focus on the frontend and use mock data for the API. Which, lead me to having to write some pretty gnarly state management code. :(

#### FE
As for the FE, the UI is not quite as polished as I would have liked. I spent too much time waffling over the design. Leading me to have to leave form validation, toast notifications, responsive design,and other minor UI improvements out of the scope of this project.

### Things I would do differently
- Lot's of POC commits in the beginning lead to a messy git history. Had to squash them all down to a single commit.
- The medication 'pills' in the recipient detail view are meant to click through to a more detailed view of the medication. I ran out of time on this.
- I would add tests for component level code.
- I would add toast notifications for the API calls.
- I would add form validation.
- I would add a loading state for the API calls.
- I would add a more detailed view of the caregiver/settings.
- Add responsive styles.







