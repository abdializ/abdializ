+++
title = "I Built Inbox Subscription Cleaner Because My Gmail Was Cooked"
description = "How I went from drowning in subscription emails to building my own tool to take back control of my inbox."
date = 2026-02-12T23:00:00-06:00
tags = ["Software Engineering", "Projects", "Gmail"]
draft = false
+++

<I>(hint: click on the image to zoom in)</I>

I have had the same Gmail since 2017. Back then it was clean, fresh, full of potential. Fast forward to now and it looked like a digital flea market. Every brand I ever looked at once was suddenly my pen pal. My inbox was not an inbox anymore. It was a subscription museum.

<div class="side-by-side-images">
  <img src="/images/dashboard-cleana.png" alt="Inbox Subscription Cleaner Dashboard" class="lightbox-trigger">
  <img src="/images/popup-cleana.png" alt="Inbox Subscription Cleaner Popup" class="lightbox-trigger">
</div>

I tried the normal "just unsubscribe" advice. Sounds good until you do it for the 47th time in a row. Open email. Scroll to the footer like you are searching for treasure. Click tiny link. Land on a page that says, *"Are you sure you want to leave our family?"* Yes. I am sure. Then repeat. At some point I realized this was not productivity. This was unpaid labor.

So I built **Inbox Subscription Cleaner** <i> (I know, I know, very booring name) </i> because I wanted one control center for the mess. I wanted to see which senders were spamming me the hardest, how often they were hitting my inbox, and whether I could unsubscribe safely in one click or needed to do it manually. Basically, I wanted my inbox to stop looking like Times Square.

## The Scanner : The Purpose of the Whole Thing

Technically, the scanner is the brain. First it checks for `List-Unsubscribe` headers, which are the grown-up, standards-based way of unsubscribing. If that is missing, it scans the email body for unsubscribe-style links. The annoying part is that senders do not always say "unsubscribe." They say stuff like "manage preferences" or "opt out" or "turn these emails off." So I made the parser look for all those variations.

```javascript
const unsubPhrases =
  'unsubscrib|opt.?out|turn.?(?:them|it)?.?off|stop.?(?:receiving)|manage.?preferences';

const hrefRegex = new RegExp(
  `<a\\s[^>]*href=["']([^"']*(?:${unsubPhrases})[^"']*)["'][^>]*>`,
  'gi'
);
```

Then I group everything by sender and score confidence. If it looks safe, the user can move fast. If it looks sketchy, it gets flagged for review. I did not want fake confidence in the UI. I wanted honest confidence. Big difference. The app should never act like it knows more than it does.

## Handling the Stubborn Senders

I also added a `manual_required` state for the stubborn senders who act like unsubscribing is a side quest. In those cases, the tool gives a **"Find in Gmail"** shortcut so users can jump straight to that sender's emails and finish the job quickly.

```typescript
function buildGmailSenderSearch(senderEmail: string) {
  const q = encodeURIComponent(`from:${senderEmail}`);
  return `https://mail.google.com/mail/u/0/#search/${q}`;
}
```

No more digging through your inbox manually. One click and you are looking at every email that sender ever sent you.

## Speed 

Now let us talk speed, because waiting kills the purpose. I use **optimistic UI**, so when you click unsubscribe, the row updates immediately. The network request runs in the background. If something fails, it rolls back and tells you. So the app feels instant instead of making you stare at a spinner like it is loading a PlayStation 2 save file.

```typescript
async function optimisticUnsubscribe(id: string) {
  const previous = getState().items;
  setState((s) => ({
    items: s.items.map((x) =>
      x.id === id ? { ...x, status: 'unsubscribed' } : x
    ),
  }));

  try {
    await api.unsubscribe(id);
  } catch {
    setState({ items: previous });
    notify('Action failed. Restored previous state.');
  }
}
```

The idea is simple. Trust the action, update the screen, and only course-correct if the server says otherwise. I didn't want to sit there wondering if something happened.

## The Vibes : Caramel Coffee Theme and Dark (of course)

Design-wise, I made a theme called **Caramel Coffee** because I did not want the app to look like every other cold, blue SaaS clone. Warm cream background, dark roast text, caramel accent. If I am cleaning inbox chaos, I do not need my interface screaming at me too.

## Why I Built It

At the end of the day, this project started for one reason: my Gmail was becoming unusable and I was also very bored. Years of subscriptions turned it into a junkyard of an email account. I wanted to fix it properly, so I built a system instead of relying on willpower. And honestly, it feels good opening my inbox now and not getting jumped by twelve "last chance" emails from brands I forgot existed.

THIS WAS GREAT FUN, I LOVED EVERY BLOODY SECOND OF IT

ps. if you want to check out the code email me at **abdi@abdisalam.blog**