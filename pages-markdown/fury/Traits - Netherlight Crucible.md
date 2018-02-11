### Relic Traits

[Battle Cry](http://www.wowhead.com/spell=200860/unrivaled-strength), [Enrage](http://www.wowhead.com/spell=200861/raging-berserker), and [Unstoppable](http://www.wowhead.com/spell=200853/unstoppable).<br>
<img class="image-margin border" src="/images/fury/traits-nlc/relic-traits.png"><br>
*DPS Error of ~1k, consider results within that range to be equivalent.

### Netherlight Crucible Traits

Highly recommended that you sim your own upgrades. See the Netherlight Crucible Guide for assistance.<br>
<img class="image-margin center-image border" src="/images/fury/traits-nlc/nlc-traits.png"><br>
*Credit: The entire (<a class="text-link" target="_blank" href="https://www.herodamage.com">herodamage team</a>) for their continued hard work and pretty graphs.

### Crucible Weight Addon String

<textarea>cruweight^128908^252191^3.09^200859^0^252207^0^252091^2.89^200856^0^200860^6.41^238076^1.73^200849^1.00^200853^2.29^252906^3.10^200861^2.57^253111^0^200857^0^252922^1.33^200846^1.03^252088^3.45^253070^2.99^253093^2.99^252875^2.89^216273^0.10^252888^2.66^252799^2.04^ilvl^1^end</textarea>

## Netherlight Crucible

Please be aware that the purpose of this guide is not to simply tell you which bonuses to take - there's no guide which will be able to do so accurately, due to the number of possible combinations. The goals of this guide are to explain the workings of the Netherlight Crucible and learn how to use the available community tools to create comparisons for yourself. Although it's themed toward Warriors, the concepts can be applied to any class.

<img class="center-image border" src="/images/fury/traits-nlc/nlc.png">

### What is the Netherlight Crucible, and how does it work?

The newest form of artifact customization, unlocked by questing through Krokuun and Mac'Aree in Argus.
<a class="text-link" target="_blank" href="http://www.wowhead.com/netherlight-crucible-guide">Anshlun has written a very good guide explaining the Crucible's basic mechanics</a>, which I recommend reading for better understanding.

Simply put, the Crucible creates a three-tier talent tree for each relic in your artifact. These trees are unique <u>to the relic</u>, not the slot, so every time you change relics, you will have different choices, and need to reallocate points in them. <u>Even relics of the same name may randomize different bonuses within the Crucible</u>.

<ul>
<li>The first tier is always <a href="http://www.wowhead.com/spell=250879/netherlight-fortification">Netherlight Fortification</a>, and has no requirement. It grants +5 ilevels to the weapon, for a total of +15 ilevels.</li>
<li>The second tier branches into the choice of <strong>Void</strong> (left) or <strong>Light</strong> (right) powers. Only one can be chosen, and requires 60-66 artifact levels to fully unlock.</li>
<li>The third tier consists of three bronze (4-point) artifact traits. Only one can be chosen, and requires 69-75 artifact levels to fully unlock. The artifact traits here cannot match the artifact trait currently in the associated relic.</li>
</ul>

<img class="center-image border" src="/images/fury/traits-nlc/nlc-overview.jpg">

While there are no resource costs to choosing bonuses within the Netherlight Crucible, the choices branch semi-exclusively, so you must think ahead before making allocations. Choosing Void (left) in the second tier restricts you to the left or center third tier choices, while choosing Light (right) restricts you to the center or right choices. This means there are four total combinations of bonuses per Relic in the Netherlight Crucible.

<img class="border" src="/images/fury/traits-nlc/nlc-detailed.jpg"><br>
(image credits: Ashlun)

### Analyzing Choices

Because of exclusive pathing, there's no simple rule for evaluating Crucible choices. A strong Void trait may lead to weak Bronze choices, while a weak Light trait may lead to stronger Bronze, therefore, both tier 2 and tier 3 options must be evaluated together.

A simple analysis may tell you that prioritizing the higher ranked bonuses is better. A [Crushing Blows](http://www.wowhead.com/spell=209472/crushing-blows) relic with [Master of Shadows](http://www.wowhead.com/spell=252091/master-of-shadows) and [Precise Strikes](http://www.wowhead.com/spell=248579/precise-strikes) will be stronger than an [Exploit the Weakness](http://www.wowhead.com/spell=209494/exploit-the-weakness) relic with [Shocklight](http://www.wowhead.com/spell=252799/shocklight) and [Storm of Swords](http://www.wowhead.com/spell=238075/storm-of-swords). That said, once you start analyzing relics of a different ilevel, with different base traits, 4 bonus combinations per relic, multiplied by 3 relics for each weapon, the situation quickly becomes complicated.

<img class="center-image border" src="/images/fury/traits-nlc/nlc-traits.png">

<u>*Notes*</u><br>
*For simplicity's sake, defensive/utility bonuses are not considered. That may come in a later update, but for now, it will be left for the user to consider based on their own criteria.*<br>
*Non-thoroughput Bronze traits can appear in the Crucible, but will be left out of the below tables.*<br>
*Bronze traits still have a maximum cap of 7 points (4 base + 3 relics); while the Crucible traits are random, it will not roll a Bronze trait already present on the relic itself. This means if you have three Precise Strikes relics, you will not see Precise Strikes offered in the Crucible.*

### Using Raidbots (the recommended method)

Simulating the Netherlight Crucible is fairly tricky at the moment, due to some awkward syntax and the large amount of possible outcomes. Luckily, our friends over at raidbots have a set up initial support for <a class="text-link" href="https://medium.com/raidbots/relic-compare-netherlight-crucible-support-729764d27837">comparing Netherlight Crucible bonuses</a>. Please be sure to read the **Caveats** section, as it contains important warnings.

Using the <a class="text-link" href="https://www.raidbots.com/simbot/relic">Relic Comparison Tool</a> is simple. Import your characters data, and select the traits present in your crucible (due to the traits rolling randomly, the Tool cannot automatically do this for you). Check the box for Netherlight Fortification as appropriate, and duplicate as needed to compare different choices.

Here I'll compare the difference between my Fire Relic taking the Void path - [Master of Shadows](http://www.wowhead.com/spell=252091/master-of-shadows) + [Unstoppable](http://www.wowhead.com/spell=200853/unstoppable), with the Light path - [Light Speed](http://www.wowhead.com/spell=252088/light-speed) + [Wrath and Fury](http://www.wowhead.com/spell=200849/wrath-and-fury).<br>
<img class="image-margin center-image border" src="/images/fury/traits-nlc/raidbots-1.png">

In this case, [Light Speed](http://www.wowhead.com/spell=252088/light-speed) + [Wrath and Fury](http://www.wowhead.com/spell=200849/wrath-and-fury) come out ahead.<br>
<img class="image-margin center-image border" src="/images/fury/traits-nlc/raidbots-2.png">

### Using SimulationCraft (for advanced users)

Manually simulating is still possible and often better for doing mass comparisons, though the syntax is somewhat awkward. The simplest way is to use overrides to force in the relevant bonuses, using the *copy* function to compare choices. Keep in mind that SimulationCraft is a constantly evolving project, so some of these functions and syntax may change or break over time.

**Netherlight Fortification/adjusting ilevel**

Comparing relics of a different ilevel can be accomplished easily by modifying the ilevel of the mainhand.<br>
The simplest way is to simply add 15 ilevels onto your weapon, by adjusting the mainhand *ilevel*, although given that Fortification will be a constant, it shouldn't be necessary to do so manually. This function is still useful for evaluating the difference better relics of a different ilevel.

For example, if you have a 951 Arms weapon, and want to change it to a 955 you would change the line<br>
*main_hand=,id=128908,bonus_id=751,ilevel=**951*** at the bottom of the simulation tab to<br>
*main_hand=,id=128908,bonus_id=751,ilevel=**955***. This can also be done with the copy command to create a comparison.

**Adding Shadow and Light powers**

Add the relevant line to the bottom of your simulation tab, just below your equipment data. Note that each crucible trait can have up to three points (one per relic), in which case the number of points should be set accordingly (for example, if you have two relics with Torment the Weak you'd use *crucible=1780:2* instead of *:1*).

**Torment The Weak** - crucible=1780:1<br>
**Shadowbind** - crucible=1778:1<br>
**Chaotic Darkness** - crucible=1779:1<br>
**Dark Sorrows** - crucible=1781:1<br>
**Master of Shadows** - crucible=1771:1<br>
**Murderous Intent** - crucible=1774:1<br>
**Shocklight** - crucible=1777:1<br>
**Light Speed** - crucible=1770:1<br>
**Secure in the Light** - crucible=1782:1<br>
**Infusion of Light** - crucible=1783:1

**Overriding Artifact traits**

Similar to the above, add the override to the bottom of your simulation tab. Ensure you enter the correct number of points in the trait, to include the base (4) and combined total of all bonuses (trait on the Relic itself, plus any from the Crucible). For example: If you have 2 Unrivaled Strength relics, and one point through the Crucible, the correct syntax would be *artifact_override=unrivaled_strength:7*.

**Wrath and Fury** - artifact_override=wrath_and_fury:5<br>
**Unrivaled Strength** - artifact_override=unrivaled_strength:5<br>
**Unstoppable** - artifact_override=unstoppable:5<br>
**Raging Berserker** - artifact_override=raging_berserker:5<br>
**Wild Slashes** - artifact_override=wild_slashes:5<br>
**Deathdealer** - artifact_override=deathdealer:5<br>
**Pulse of Battle** - artifact_override=pulse_of_battle:5

**Creating a comparison**

You can combine the above to evaluate different relics and Netherlight Crucible bonuses. For example, take an Arms Warrior a 951 weapon, and compare using a 915 (62 ilvls) Deathblow relic with Shadowbind and Crushing Blows to a 900 (58 ilvls) Exploit the Weakness relic with Torment the Weak and Precise Strikes.<br>
<img class="image-margin center-image border" src="/images/fury/traits-nlc/simc-1.png">

The two come out almost equal, despite the ilevel disparity, due to the better bonuses. This isn't unusual, as generally ilevel is going to win, unless there's a pronounced disparity between bonus traits.<br>
<img class="image-margin border" src="/images/fury/traits-nlc/simc-2.png">

This is, clearly, much more involved than using Raidbots, but offers certain advantages, not the least of which being able to do large batches of simulations and comparisons (see lists above) quickly on your own machine. It's also certainly not the only way to work with the Crucible in SimCraft, I just like using overrides because I find it much easier to work with and keep track of what I'm doing, rather than deciphering raw spell IDs.

*There are too many variables and combinations within the Netherlight Crucible to create an easy list of X > Y. Reference the lists provided, but understand the strength of each bonus, and using the community tools available will give you better answers.*