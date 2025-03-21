+++
title = "My Books"
description = "Who reads nowadays? Me! And these are my books"
tags = ["Books"]
+++

*Note: Books with gold/blue coloring have detailed blog posts. Books marked with ** have quick thoughts. I am still working on this page :)*

## Philosophy
1. <a href="/blog/whynow" class="has-blog-post" style="color: #ffb255 !important; text-decoration: underline !important;">The Brothers Karamazov</a>

2. Meditations

3. The Metamorphosis 

4. The Judgement (Das Uretil, 1913)

## Non-Fiction
1. Atomic Habits <span class="quick-thought-indicator" style="color: #ffb255 !important; cursor: pointer; margin-left: 5px;" onclick="document.getElementById('atomic-habits-thoughts').style.display = document.getElementById('atomic-habits-thoughts').style.display === 'none' ? 'block' : 'none'">**</span>
   <div id="atomic-habits-thoughts" style="display: none; margin-left: 20px; padding-left: 10px; border-left: 2px solid #ffb255; font-size: 0.9em;">
     <p>The 1% improvement principle is transformative over time. Identity-based habits are more sustainable than outcome-based ones. The four laws of behavior change provide a practical framework. Small habits compound into remarkable results.</p>
   </div>


2. 48 Laws of Power <span class="quick-thought-indicator" style="color: #ffb255 !important; cursor: pointer; margin-left: 5px;" onclick="document.getElementById('power-laws-thoughts').style.display = document.getElementById('power-laws-thoughts').style.display === 'none' ? 'block' : 'none'">**</span>
   <div id="power-laws-thoughts" style="display: none; margin-left: 20px; padding-left: 10px; border-left: 2px solid #ffb255; font-size: 0.9em;">
   <p>When I first read this book, I thought it was brilliant—strategic, insightful, and dangerously effective. But over time, I came to see it for what it truly is: a cold, calculated guide to power, often at the expense of morality. Some laws are undeniably useful, and when applied wisely, they can give you an edge in life. But the book itself? It's ruthless, even sinister at times. Still, I can't deny its impact. A solid 7.9/10—powerful, but not something I'd live by. </p>
   </div>

3. Breaking Night - Liz Murry 

  ## Fiction 

  1. The Vanising Half - Brit Bennett 

  2. Love from A to Z - S.K Ali <span class="quick-thought-indicator" style="color: #ffb255 !important; cursor: pointer; margin-left: 5px;" onclick="document.getElementById('az-skali-thoughts').style.display = document.getElementById('az-skali-thoughts').style.display === 'none' ? 'block' : 'none'">**</span>
   <div id="az-skali-thoughts" style="display: none; margin-left: 20px; padding-left: 10px; border-left: 2px solid #ffb255; font-size: 0.9em;">
   <p>I read this back when I was about 14, it was a good read at the time!! </p>
   </div>

  3. Frankenstein: The 1818 Text - Mary Shelly  <span class="quick-thought-indicator" style="color: #ffb255 !important; cursor: pointer; margin-left: 5px;" onclick="document.getElementById('fran-mary-thoughts').style.display = document.getElementById('fran-mary-thoughts').style.display === 'none' ? 'block' : 'none'">**</span>
   <div id="fran-mary-thoughts" style="display: none; margin-left: 20px; padding-left: 10px; border-left: 2px solid #ffb255; font-size: 0.9em;">
   <p>I always loved the movies and live action version of this story, and I almost put it in the philsophy section, because it is quite a philsopical read, but it just amazing work of fiction honestly. </p>
   </div>

   


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

