I've seen this question float around a lot lately, attributed to a variety of claims, whether it be due to uptime, rotation, cooldowns, Execute, Juggernaut, group composition, or simple user error. 

As most things in life, reality is a combination of factors; there's rarely a single simple answer that'll make you say "*oh yeah!"* like you forgot the day ends in y. Still, the question remains, <u>why can't I hit my sim</u>?

### The sim is too good

This is the first, and likely the truest answer. The sim isn't just good, it's *damn good*, with ideal conditions, and a level of optimization that many players won't match.

That isn't to say that it's wrong, however, nothing in the simulation can't be performed by actual players, and great care has been taken to ensure that unrealistic gains or unreasonable reactions were left out, to better model an actual players performance.

The flipside of this point is that players make mistakes; even when you think you've done everything right, at some point you more than likely pressed the wrong button, hit a lag spike, skipped a GCD, had to dodge some fire, were watching timers instead of the boss health, or any number of other mistakes. Even with the easiest rotations, most players simply aren't capable of pressing 7+ different buttons every second for 4-10 minutes without an accident along the way.

What's should we do about that? The simulation could be programmed to make randomized mistakes, but that corrupts analysis, alters stat weights, and compromises results; it just doesn't help anyone. Sure, it may be easier to hit, but <u>simulations are meant to help teach players to be better, not validate playing worse</u>.

### Boss fights have mechanics

Another true statement, and one often brought up by those critical of simulations. Real encounters have varied mechanics which result in loss of uptime, movement, target swapping, cooldown delay, or other inefficient damage, while simulations are generally Patchwerk, single-target, with total uptime.

But there's a reason for this. Sure, you could create 11 different encounter models, based on the 11 encounters in Antorus, but that also leaves you with 11 different simulation results, 11 different stat weights, 11 different sets of optimal gear; even assuming multiple encounters overlap, you're still left with 3, 4, or more.

The point of Patchwerk, and the other default encounter types, is to eliminate variables, creating a baseline; the rest can be accomplished through analysis. You don't need an exact model of Gul'dan and an exact model of Tichondrius to create a sample "wave of adds every X seconds, followed by a single target priority target with light movement", it's called HecticAddCleave (also Beastlord). It may not provide an entirely accurate amount of sim DPS for each encounter, but that number too is largely irrelevant.

What a lot of players fail to recognize is that the simulation DPS is largely irrelevant, it only matters within the context provided. It's not meant to represent the exact figure that you should reach, although it can serve as a target to chase, precisely *because* mechanics play a large role in that performance; the result is primarily meant to serve as a method of comparison during optimization, to quantify the impact of a gear, talent, or rotational change. That doesn't mean the number should be entirely unobtainable, but reaching that target will always be subject to circumstance; a 7-minute encounter with 82% uptime isn't indicative of a 5-minute hard-target simulation.

### Sim DPS has a range

This is perhaps the single most overlooked point I can make. When simulating their character, players are quick to look at the bold number result, and proudly proclaim *"that's my dps!"*.

<img class="center-image border" src="/images/fury/sims/sims-1.png">

While glossing right over all those numbers listed below.

Most important to this topic is that fourth value: **DPS Range**.
It's easy to forget that simulations are an average, which the number displayed is representative of. While this simulation may clock in just shy of 2.5 million DPS, it has a range of +/-404,000 <u>in either direction</u>.

There's even a handy graph, to help visualize the data.

<img class="center-image border" src="/images/fury/sims/sims-2.png">

So while it's called the average for a reason, it's quite possible to go above or below that number. Just think back to how many times you've said *"I was doing so good that pull, it would have been a high rank for sure!"*. Now you may be asking why you don't see ranges like this in your own kills, but it's important to remember that simulations typically start at 10,000 iterations, and you've probably killed less than two dozen bosses so far this tier.

### Put it all together

Combine these factors, and yes, you will probably end up on the lower end of average, and whether it's due to encounter mechanics, personal liability, or pure circumstance, you may not reach your sim dps, and maybe that feels wrong, but it puts statements like *"I pull 100k less than my sim"* into better context.

A tool is only as good as you use it, and if you simply run a simulation, expecting to see the same number at the end of every boss fight, you're using it wrong. Performance is measured against peers, simulations measure potential.