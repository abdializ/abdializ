+++
title = "Favorite quotes"
description = '( **: a short note — same idea as on <a href="/books/">Books</a>. )'
descriptionHTML = true
metaDescription = "Favorite quotes; ** marks a short note, same convention as the Books page."
compact = true
tags = ["Free-Writing", "Sir Abdisalam"]
+++

<div class="quotes-page">

<p>1. “Has there not come upon man a period of time when he was not a thing even mentioned?” — Quran 76:1 <span class="quick-thought-indicator" style="color: #ffb255 !important; cursor: pointer; margin-left: 5px;" onclick="document.getElementById('quote-q76-thoughts').style.display = document.getElementById('quote-q76-thoughts').style.display === 'none' ? 'block' : 'none'">**</span></p>
<div id="quote-q76-thoughts" style="display: none; margin-left: 20px; padding-left: 10px; border-left: 2px solid #ffb255; font-size: 0.9em;">
<p>This really keeps me humble and makes me feel like I’m never above anyone in any reality.</p>
</div>

<p>2. “Did We not create you from a lowly fluid?” — Quran 77:20 <span class="quick-thought-indicator" style="color: #ffb255 !important; cursor: pointer; margin-left: 5px;" onclick="document.getElementById('quote-q77-thoughts').style.display = document.getElementById('quote-q77-thoughts').style.display === 'none' ? 'block' : 'none'">**</span></p>
<div id="quote-q77-thoughts" style="display: none; margin-left: 20px; padding-left: 10px; border-left: 2px solid #ffb255; font-size: 0.9em;">
<p>I am from a fluid that is nothing and is thrown, wiped away, and is not even thought of—so why feel arrogant?</p>
</div>

<p>3. “The cleverest of all, in my opinion, is the man who calls himself a fool at least once a month.” — Fyodor Dostoevsky</p>

<p>4. “The soul becomes dyed with the color of its thoughts.” — Marcus Aurelius</p>

<p>5. “A person’s worth is measured by what they seek.”</p>

<p>6. “Never have I dealt with anything more difficult than my own soul, which sometimes helps me and sometimes opposes me.” </p>

<p>7. “It is during our darkest moments that we must focus to see the light.” — Aristotle Onassis (attributed) <span class="quick-thought-indicator" style="color: #ffb255 !important; cursor: pointer; margin-left: 5px;" onclick="document.getElementById('quote-dark-thoughts').style.display = document.getElementById('quote-dark-thoughts').style.display === 'none' ? 'block' : 'none'">**</span></p>
<div id="quote-dark-thoughts" style="display: none; margin-left: 20px; padding-left: 10px; border-left: 2px solid #ffb255; font-size: 0.9em;">
<p>For walking in the dark can cause many pains; so pause and move slowly.</p>
</div>

<p>8. “The place in which I’ll fit will not exist until I make it.” — James Baldwin</p>

<p>9. “Out of suffering have emerged the strongest souls; the most massive characters are seared with scars.” — Kahlil Gibran</p>

<p>10. “Nobody realizes that some people expend tremendous energy merely to be normal.” — Albert Camus <span class="quick-thought-indicator" style="color: #ffb255 !important; cursor: pointer; margin-left: 5px;" onclick="document.getElementById('quote-camus-thoughts').style.display = document.getElementById('quote-camus-thoughts').style.display === 'none' ? 'block' : 'none'">**</span></p>
<div id="quote-camus-thoughts" style="display: none; margin-left: 20px; padding-left: 10px; border-left: 2px solid #ffb255; font-size: 0.9em;">
<p>Be efficient and be yourself.</p>
</div>

<p>11. “Love is not love which alters when it alteration finds.” — Shakespeare, Sonnet 116</p>

<p>12. “And He placed between you affection and mercy.” — Quran 30:21</p>

<p>13. “Man only likes to count his troubles; he doesn’t calculate his happiness.” — Fyodor Dostoevsky, <em>Notes from Underground</em></p>

<p>14. “Who, being loved, is poor?” — Oscar Wilde, <em>A Woman of No Importance</em></p>

<p>15. “When harm touches man, he calls upon Us, lying on his side or sitting or standing. But when We remove his harm from him, he passes on as if he had never called upon Us for a harm that touched him.” — Quran 10:12</p>

</div>

<style>
span.quick-thought-indicator {
  color: #ffb255 !important;
  cursor: pointer !important;
  margin-left: 5px !important;
}

body.light-mode span.quick-thought-indicator {
  color: #1a73e8 !important;
}

body.light-mode [id$="-thoughts"] {
  border-left-color: #1a73e8 !important;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.quick-thought-indicator').forEach(function(el) {
    el.style.color = document.body.classList.contains('light-mode') ? '#1a73e8' : '#ffb255';
  });
});
</script>
