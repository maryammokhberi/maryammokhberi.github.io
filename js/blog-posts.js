/* ============================================
   BLOG POSTS DATA
   To add a new post: copy one object and fill in your content.
   Date format: "Month DD, YYYY"
   Categories: "Responsible AI" | "Care AI" | "Research" | "Reflections" | "Agentic AI"
   ============================================ */

const BLOG_POSTS = [
  {
    id: "care-as-infrastructure",
    date: "May 12, 2026",
    category: "Care AI",
    title: "Care as Infrastructure: What AI Gets Wrong About Helping",
    excerpt: "The word 'care' has been colonized by tech optimism. Every new product promises to 'care' for users, to anticipate needs, to reduce friction. But care, real care, is not about efficiency. It is about attention, reciprocity, and the willingness to be changed by the encounter.",
    readTime: "8 min read",
    content: `
      <p>The word "care" has been colonized by tech optimism. Every new product promises to "care" for users, to anticipate needs, to reduce friction. But care, real care, is not about efficiency. It is about attention, reciprocity, and the willingness to be changed by the encounter.</p>

      <p>When I was designing AMINA, an AI assistant built with and for immigrant-led nonprofits, I kept returning to this tension. The organizations we worked with didn't need systems that optimized their workflows. They needed systems that understood the stakes of their work: that a misfiled grant application could mean a family losing shelter, or that a missed translation could rupture a community's trust in an institution.</p>

      <h3>The Problem with "Assistive" Framing</h3>
      <p>Most AI assistants are designed around the assumption that the user's time is the scarcest resource. But for the communities I study, marginalized immigrant nonprofits operating outside formal systems, time is rarely the bottleneck. Trust is. Legibility is. The ability to be seen by systems designed for someone else entirely.</p>

      <p>Assistive AI that only reduces cognitive load without addressing systemic invisibility isn't care. It's convenience for people who already have access to convenience.</p>

      <h3>What Care Infrastructure Actually Requires</h3>
      <p>During our co-design sessions, participants kept returning to a simple request: "Can the system remember who we are?" Not just our organization name or tax ID, but our history, our values, the communities we serve, the reasons we do this work. They wanted a system that could hold context across time, not just within a single session.</p>

      <p>This is a design problem that current LLM architectures aren't well-positioned to solve. Statelessness is a feature for most commercial use cases. For care infrastructure, it's a bug.</p>

      <p>Genuine Care AI would need to: hold longitudinal context about people and communities; understand the political and relational texture of organizational work; be transparent about its limitations and uncertainties; and be governed by the communities it serves, not just deployed for them.</p>

      <h3>A Different Design Question</h3>
      <p>The field tends to ask: "How can AI assist more efficiently?" I'd like us to ask instead: "Who decides what counts as help?" That shift, from optimization to governance and from efficiency to accountability, is what distinguishes Care AI from AI-with-good-intentions.</p>

      <p>It's a harder question. It requires involving communities in design rather than just usability testing. It requires building systems that can be refused, corrected, and overridden. It requires humility from designers who are used to defining what problems look like before they start solving them.</p>

      <p>I don't have a complete answer. But I think the field needs to sit with the discomfort of the question a little longer before rushing to the next architecture.</p>
    `
  },
  {
    id: "agentic-ai-accountability",
    date: "April 3, 2026",
    category: "Agentic AI",
    title: "When AI Acts Autonomously: Who Is Responsible for the Consequences?",
    excerpt: "Agentic AI systems, those that take multi-step actions in the world with minimal human intervention, are arriving faster than our accountability frameworks. This isn't primarily a technical problem. It's a governance problem with a technical surface.",
    readTime: "11 min read",
    content: `
      <p>Agentic AI systems, those that take multi-step actions in the world with minimal human intervention, are arriving faster than our accountability frameworks. This isn't primarily a technical problem. It's a governance problem with a technical surface.</p>

      <p>In the last year, I've been paying close attention to how agentic AI is entering nonprofit and community contexts. A donor-facing platform that autonomously drafts and sends funding recommendations. An intake system that schedules appointments and sends follow-ups without human review. A grant-writing assistant that submits applications on behalf of organizations. Each of these is, on its face, a productivity win. Each of them also redistributes accountability in ways that haven't been thought through.</p>

      <h3>The Accountability Gap</h3>
      <p>When a human case worker makes an error in an intake form, accountability is clear: to a supervisor, to the organization, to the person harmed. When an agentic system makes the same error, accountability diffuses: Was it the model? The deployment configuration? The organization that chose to deploy it? The vendor? The open-source community that built the underlying components?</p>

      <p>This diffusion isn't accidental. It's often a feature of how these systems are sold: "the AI handles it" is a marketing claim that also functions as an accountability shield.</p>

      <h3>The Consent Problem</h3>
      <p>Agentic systems often act on behalf of people who haven't meaningfully consented to that representation. When an AI assistant sends emails in my name, schedules meetings, or makes purchases: did I consent to the specific actions it took, or only to a general category of assistance? The distinction matters enormously when things go wrong, and even more when they go wrong for people with less power to push back.</p>

      <p>In the communities I study, this power asymmetry is acute. An immigrant-led nonprofit that uses an agentic grant-management system doesn't have the resources to audit the system's actions, contest errors, or seek redress. They're often stuck with the consequences of a system they didn't fully understand agreeing to use.</p>

      <h3>What Accountable Agentic AI Looks Like</h3>
      <p>I'm not arguing against agentic AI. I'm arguing for accountability-forward design, where the architecture includes, from the start: audit trails accessible to end users, not just operators; meaningful override mechanisms that are actually usable; clear escalation paths when the system is uncertain; and governance structures that give affected communities a voice in how systems are deployed and corrected.</p>

      <p>The technology isn't the hard part. The politics of who gets to define accountability is.</p>
    `
  },
  {
    id: "immigrant-nonprofits-ai",
    date: "February 18, 2026",
    category: "Research",
    title: "The Invisible Work: How AI Platforms Fail Immigrant-Led Nonprofits",
    excerpt: "Donor platforms, grant databases, and nonprofit management tools are built with a particular kind of organization in mind: formally incorporated, well-resourced, English-speaking, legible to institutional funders. Immigrant-led community organizations often are none of these things.",
    readTime: "9 min read",
    content: `
      <p>Donor platforms, grant databases, and nonprofit management tools are built with a particular kind of organization in mind: formally incorporated, well-resourced, English-speaking, legible to institutional funders. Immigrant-led community organizations often are none of these things, and the gap between the assumed user and the actual user is where a lot of harm happens quietly.</p>

      <p>Over the past two years, I've been conducting interviews and co-design sessions with people who run informal and semi-formal immigrant mutual aid networks, cultural organizations, and community care collectives in Toronto. What they describe is a consistent experience of being made invisible by the tools that are supposed to support civil society.</p>

      <h3>What Invisibility Looks Like</h3>
      <p>It looks like a grant database that requires a registered charity number before an organization can even search for opportunities, screening out the community groups most likely to lack formal status. It looks like donor platforms that rank organizations by online presence, favoring groups with marketing budgets over those doing the most essential work. It looks like AI-powered matching tools that learn from historical funding data, data that reflects decades of institutional bias toward English-speaking, formally structured organizations.</p>

      <p>The AI doesn't create these inequities. But it launders them. When a platform says "our algorithm surfaces the best-fit organizations," it implies objectivity. The bias becomes harder to see, and therefore harder to contest.</p>

      <h3>What Communities Actually Need</h3>
      <p>The participants in our research weren't asking for AI to solve their funding problems. They were asking for AI that could help them navigate systems designed to exclude them: translation support that preserved cultural nuance, not just literal meaning; documentation tools that understood informal organizational structures; platforms that could represent their work in terms legible to funders without erasing what made that work specific and local.</p>

      <p>This is why we built AMINA with an explicit commitment to what we call "accountable inclusion": not just removing barriers to access, but being transparent about how the system represents organizations and giving organizations the ability to correct that representation.</p>

      <h3>A Structural Observation</h3>
      <p>The nonprofit tech sector, including its AI layer, is overwhelmingly built by people who have never depended on the social safety net. This is not a criticism of individuals. It's a structural problem with predictable consequences. When the designers of infrastructure are systematically different from its most vulnerable users, the resulting systems reflect designers' assumptions about what users need.</p>

      <p>Participatory design is one partial answer. But participation isn't enough if it only happens at the research phase and the actual system architecture and business model remain unchanged. Real structural change requires communities to have ongoing governance roles, not just voices in the room, but hands on the wheel.</p>
    `
  }
];

// Helper: get all posts sorted by date (most recent first)
function getAllPosts() {
  return [...BLOG_POSTS].sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Helper: get post by ID
function getPostById(id) {
  return BLOG_POSTS.find(p => p.id === id) || null;
}

// Helper: get posts by category
function getPostsByCategory(category) {
  return BLOG_POSTS.filter(p => p.category === category);
}
