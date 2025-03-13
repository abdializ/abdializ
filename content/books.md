+++
title = "My Books"
description = "These are books I've read. The Gold colored (Blue in Light Mode) have my thoughts written in a blog post. If the book name has a ** near it that means there is quick thought on it"
tags = ["Books"]
+++

## Philosophy
1. <a href="/blog/whynow" class="has-blog-post" style="color: #ffb255 !important; text-decoration: underline !important;">The Brothers Karamazov</a>

2. Meditations

## Non-Fiction
1. Atomic Habits <span class="quick-thought-indicator" style="color: #ffb255 !important; cursor: pointer; margin-left: 5px;" onclick="document.getElementById('atomic-habits-thoughts').style.display = document.getElementById('atomic-habits-thoughts').style.display === 'none' ? 'block' : 'none'">**</span>
   <div id="atomic-habits-thoughts" style="display: none; margin-left: 20px; padding-left: 10px; border-left: 2px solid #ffb255; font-size: 0.9em;">
     <p>The 1% improvement principle is transformative over time. Identity-based habits are more sustainable than outcome-based ones. The four laws of behavior change provide a practical framework. Small habits compound into remarkable results.</p>
   </div>


2. 48 Laws of Power <span class="quick-thought-indicator" style="color: #ffb255 !important; cursor: pointer; margin-left: 5px;" onclick="document.getElementById('power-laws-thoughts').style.display = document.getElementById('power-laws-thoughts').style.display === 'none' ? 'block' : 'none'">**</span>
   <div id="power-laws-thoughts" style="display: none; margin-left: 20px; padding-left: 10px; border-left: 2px solid #ffb255; font-size: 0.9em;">
   <p>When I first read this book, I thought it was brilliant—strategic, insightful, and dangerously effective. But over time, I came to see it for what it truly is: a cold, calculated guide to power, often at the expense of morality. Some laws are undeniably useful, and when applied wisely, they can give you an edge in life. But the book itself? It's ruthless, even sinister at times. Still, I can't deny its impact. A solid 7.9/10—powerful, but not something I'd live by. </p>
   </div>

---

*Note: Books with gold/blue coloring have detailed blog posts. Books marked with ** have quick thoughts.*

<style>
/* Books with blog posts - gold in dark mode, blue in light mode */
a.has-blog-post,
a.has-blog-post:link,
a.has-blog-post:visited,
a.has-blog-post:hover,
a.has-blog-post:active {
  color: #ffb255 !important; /* Gold color for dark mode */
  text-decoration: none !important;
}

body.light-mode a.has-blog-post,
body.light-mode a.has-blog-post:link,
body.light-mode a.has-blog-post:visited,
body.light-mode a.has-blog-post:hover,
body.light-mode a.has-blog-post:active {
  color: #1a73e8 !important; /* Blue color for light mode */
}

/* Quick thought indicators - gold in dark mode, blue in light mode */
span.quick-thought-indicator {
  color: #ffb255 !important; /* Gold color for dark mode */
  cursor: pointer !important;
  margin-left: 5px !important;
}

body.light-mode span.quick-thought-indicator {
  color: #1a73e8 !important; /* Blue color for light mode */
}

/* Quick thought content styling */
body.light-mode [id$="-thoughts"] {
  border-left-color: #1a73e8 !important;
}
</style>

<script>
// Add this script to force the colors after the page loads
document.addEventListener('DOMContentLoaded', function() {
  // Force colors for blog post links
  document.querySelectorAll('.has-blog-post').forEach(function(el) {
    el.style.color = document.body.classList.contains('light-mode') ? '#1a73e8' : '#ffb255';
    el.style.textDecoration = 'underline';
  });
  
  // Force colors for quick thought indicators
  document.querySelectorAll('.quick-thought-indicator').forEach(function(el) {
    el.style.color = document.body.classList.contains('light-mode') ? '#1a73e8' : '#ffb255';
  });
});
</script>

