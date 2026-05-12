import { useState } from 'react'
import { COMMUNITY_ROUTES } from '../data/communityRoutes'

const CATEGORIES = ['Alles', 'Nederland', 'Europa', 'Alpen', 'Kustlijn', 'Nachttrein', 'Stad']

const USERS = {
  saartje:  { name: 'saartje_reist',     location: 'Amsterdam',  color: '#e91e8c', initials: 'SR' },
  mike:     { name: 'trainspotter_mike', location: 'Rotterdam',  color: '#2196F3', initials: 'TM' },
  julia:    { name: 'julia_wanderlust',  location: 'Utrecht',    color: '#FF9800', initials: 'JW' },
  nordic:   { name: 'nordic_explorer',   location: 'Oslo',       color: '#4CAF50', initials: 'NE' },
  isa:      { name: 'isa_on_rails',      location: 'Den Haag',   color: '#9C27B0', initials: 'IR' },
  romain:   { name: 'romain_roule',      location: 'Parijs',     color: '#F44336', initials: 'RR' },
  thomas:   { name: 'alpen_thomas',      location: 'Bern',       color: '#00BCD4', initials: 'AT' },
  emma:     { name: 'emma_op_de_rails',  location: 'Groningen',  color: '#8BC34A', initials: 'ER' },
}

const POSTS = [
  {
    id: 'p1', routeId: 'cr1', user: USERS.saartje, ago: '1u geleden',
    title: 'Utrecht → Maastricht via de Heuvelrug',
    from: 'Utrecht', to: 'Maastricht', duration: '2u 15m',
    img: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=600&q=80',
    likes: 147, comments: 23,
    tags: ['Natuur', 'Stad'],
    description: 'Mijn favoriete dagtripje 🚂 De natuur bij De Bilt is echt een aanrader voordat je de heuvels van Limburg ingaat.',
    categories: ['Nederland'],
  },
  {
    id: 'p2', routeId: 'cr2', user: USERS.mike, ago: '3u geleden',
    title: 'Rotterdam Centraal → Antwerpen',
    from: 'Rotterdam', to: 'Antwerpen', duration: '35m',
    img: 'https://images.unsplash.com/photo-1567016520496-0cb37d8467a7?w=600&q=80',
    likes: 89, comments: 7,
    tags: ['Stad'],
    description: 'Snelste treingrens van Europa? 35 minuten en je staat in een compleet andere stad. Antwerpen Centraal = het mooiste station ter wereld 😍',
    categories: ['Nederland', 'Europa'],
  },
  {
    id: 'p3', routeId: 'cr3', user: USERS.julia, ago: '6u geleden',
    title: 'Amsterdam → Berlijn overnight',
    from: 'Amsterdam', to: 'Berlijn', duration: '6u 20m',
    img: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&q=80',
    likes: 312, comments: 41,
    tags: ['Nachttrein', 'Stad'],
    description: "Mijn allereerste nachttrein! Je stapt 's avonds in Amsterdam in, ontbijt en staat 's ochtends uitgerust in Berlijn. Nooit meer vliegen.",
    categories: ['Europa', 'Nachttrein'],
  },
  {
    id: 'p4', routeId: 'cr4', user: USERS.nordic, ago: '1 dag geleden',
    title: 'Bergen → Ålesund fjordtrip',
    from: 'Bergen', to: 'Ålesund', duration: '5u 45m',
    img: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&q=80',
    likes: 524, comments: 68,
    tags: ['Natuur', 'Panorama'],
    description: 'Neem de trein vanuit Bergen, dan de lokale ferry via de Geirangerfjord. Dit uitzicht bestaat echt 🏔️',
    categories: ['Europa'],
  },
  {
    id: 'p5', routeId: 'cr5', user: USERS.isa, ago: '2 dagen geleden',
    title: 'Den Haag → Middelburg, Zeeland',
    from: 'Den Haag HS', to: 'Middelburg', duration: '1u 40m',
    img: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80',
    likes: 73, comments: 9,
    tags: ['Kustlijn', 'Natuur'],
    description: 'Even ontsnappen aan de stad. Zeeuws brood, mosselen en oneindige horizonnen. Dit vergeet je niet 🌊',
    categories: ['Nederland', 'Kustlijn'],
  },
  {
    id: 'p6', routeId: 'cr6', user: USERS.romain, ago: '3 dagen geleden',
    title: 'Parijs → Lyon: de culinaire route',
    from: 'Paris Gare de Lyon', to: 'Lyon Part-Dieu', duration: '2u 00m',
    img: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&q=80',
    likes: 198, comments: 33,
    tags: ['Stad', 'Panorama'],
    description: 'TGV in 2 uur van de stad van licht naar de culinaire hoofdstad van de wereld. Bouchon lyonnais, absoluut geen optie om over te slaan 🇫🇷',
    categories: ['Europa', 'Stad'],
  },
  {
    id: 'p7', routeId: 'cr7', user: USERS.thomas, ago: '4 dagen geleden',
    title: 'Zürich → Lugano door de Alpen',
    from: 'Zürich HB', to: 'Lugano', duration: '2u 45m',
    img: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&q=80',
    likes: 407, comments: 52,
    tags: ['Alpen', 'Panorama'],
    description: 'Door de Gotthard-tunnel van Duits naar Italiaans Zwitserland. Het zonsonderganglicht op het Lugano-meer is sprookjesachtig ✨',
    categories: ['Europa', 'Alpen'],
  },
  {
    id: 'p8', routeId: 'cr8', user: USERS.emma, ago: '5 dagen geleden',
    title: 'Groningen → Leeuwarden op de fiets',
    from: 'Groningen', to: 'Leeuwarden', duration: '55m',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    likes: 56, comments: 14,
    tags: ['Natuur'],
    description: 'De trein, een huurfiets en de Friese windmolens. Dit is Nederland op zijn mooist. Goedkoper dan je denkt! 🚲',
    categories: ['Nederland'],
  },
]

const PLACEHOLDER_IMG = 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=600&q=80'

function UserAvatar({ user, size = 36 }) {
  return (
    <div
      className="rounded-full flex items-center justify-center flex-shrink-0 font-bold text-white"
      style={{ width: size, height: size, background: user.color, fontSize: size * 0.33 }}
    >
      {user.initials}
    </div>
  )
}

function PostCard({ post, isUserPost = false, isSaved, onToggleSave, onOpen }) {
  const [liked, setLiked] = useState(false)
  const saved = isSaved ?? false

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
      {/* User header */}
      <div className="flex items-center gap-3 px-4 py-3">
        <UserAvatar user={post.user} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <p className="font-bold text-sm text-on-surface leading-none">{post.user.name}</p>
            {isUserPost && (
              <span className="text-[9px] font-label font-bold bg-[#E53535] text-white px-1.5 py-0.5 rounded">JIJ</span>
            )}
          </div>
          <p className="text-xs text-on-surface-variant mt-0.5">{post.user.location} · {post.ago}</p>
        </div>
        {!isUserPost && (
          <button className="text-xs text-[#7744cb] font-label font-bold px-3 py-1 rounded-full border border-[#7744cb]/30 bg-[#7744cb]/5">
            Volg
          </button>
        )}
      </div>

      {/* Image — tappable to open detail */}
      <div className="relative cursor-pointer" onClick={onOpen}>
        <img
          src={post.img || PLACEHOLDER_IMG}
          alt={post.title}
          className="w-full h-48 object-cover"
          onError={e => { e.currentTarget.src = PLACEHOLDER_IMG }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-3 left-4 right-4">
          <p className="text-white font-bold text-base leading-tight">{post.title}</p>
          <div className="flex items-center gap-3 mt-1 text-white/80 text-xs">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined" style={{ fontSize: 13 }}>train</span>
              {post.from} → {post.to}
            </span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined" style={{ fontSize: 13 }}>schedule</span>
              {post.duration}
            </span>
          </div>
        </div>
        {/* "Bekijk" badge */}
        <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm rounded-full px-2.5 py-1 flex items-center gap-1">
          <span className="material-symbols-outlined text-white" style={{ fontSize: 12 }}>open_in_full</span>
          <span className="text-white text-[10px] font-label font-bold">Bekijk</span>
        </div>
      </div>

      {/* Description */}
      <div className="px-4 pt-3">
        {post.description && (
          <p className="text-sm text-on-surface-variant leading-relaxed">{post.description}</p>
        )}
        {post.tags?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {post.tags.map(tag => (
              <span key={tag} className="text-[10px] font-label font-bold px-2 py-0.5 rounded-full bg-[#7744cb]/8 text-[#7744cb]">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-1 px-4 py-3">
        <button
          onClick={() => setLiked(l => !l)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all active:scale-95"
          style={{ background: liked ? '#fee2e2' : '#f9f9f9' }}
        >
          <span className="material-symbols-outlined text-rose-500 text-base" style={{ fontVariationSettings: liked ? "'FILL' 1" : "'FILL' 0" }}>
            favorite
          </span>
          <span className="text-xs font-label font-bold text-rose-500">{(post.likes ?? 0) + (liked ? 1 : 0)}</span>
        </button>
        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f9f9f9] transition-all active:scale-95">
          <span className="material-symbols-outlined text-on-surface-variant text-base">chat_bubble</span>
          <span className="text-xs font-label font-bold text-on-surface-variant">{post.comments ?? 0}</span>
        </button>
        <div className="flex-1" />
        <button
          onClick={onToggleSave}
          className="w-8 h-8 flex items-center justify-center rounded-full transition-all active:scale-95"
          style={{ background: saved ? '#7744cb' : '#f9f9f9' }}
        >
          <span className="material-symbols-outlined text-base" style={{ color: saved ? 'white' : '#7744cb', fontVariationSettings: saved ? "'FILL' 1" : "'FILL' 0" }}>
            bookmark
          </span>
        </button>
      </div>
    </div>
  )
}

export default function Discover({ userRoutes = [], isSaved, onToggleSave, onOpenRoute }) {
  const [activeCategory, setActiveCategory] = useState('Alles')

  // Convert user routes to post format
  const userPosts = userRoutes.map(r => ({
    id: `ur-${r.id}`,
    routeId: r.id,
    user: { name: 'jouw_route', location: 'Community', color: '#E53535', initials: 'JR' },
    ago: 'Zojuist gedeeld',
    title: r.title || `${r.from} → ${r.to}`,
    from: r.from,
    to: r.to,
    duration: r.duration || '?',
    img: r.img || PLACEHOLDER_IMG,
    likes: r.likes ?? 0,
    comments: 0,
    tags: r.tags || [],
    description: r.description || '',
    categories: r.tags || [],
    isUserPost: true,
    _route: r,
  }))

  const allPosts = [...userPosts, ...POSTS]

  const filtered = activeCategory === 'Alles'
    ? allPosts
    : allPosts.filter(p => p.categories?.includes(activeCategory))

  const getRoute = (post) => post._route || COMMUNITY_ROUTES.find(r => r.id === post.routeId)

  return (
    <div className="flex flex-col h-full bg-[#f7f6fb]">
      {/* Header */}
      <header className="px-5 pt-14 pb-3 bg-[#f7f6fb]">
        <h1 className="font-headline uppercase text-[28px] leading-none text-on-surface tracking-wide">Ontdek</h1>
        <p className="text-sm text-on-surface-variant mt-0.5">Reizen van de community</p>
      </header>

      {/* Category chips */}
      <div className="flex gap-2 px-5 pb-3 overflow-x-auto no-scrollbar flex-shrink-0">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className="flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-label font-bold transition-all active:scale-95"
            style={
              activeCategory === cat
                ? { background: '#7744cb', color: 'white' }
                : { background: 'white', color: '#6b7280', border: '1px solid #e5e7eb' }
            }
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Feed */}
      <div className="overflow-y-auto flex-1 px-5 pb-28 space-y-4">
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-on-surface-variant text-sm">
            Geen posts in deze categorie
          </div>
        ) : filtered.map(post => {
          const route = getRoute(post)
          return (
            <PostCard
              key={post.id}
              post={post}
              isUserPost={post.isUserPost}
              isSaved={post.routeId ? isSaved?.(post.routeId) : false}
              onToggleSave={post.routeId ? () => onToggleSave?.(post.routeId) : undefined}
              onOpen={route ? () => onOpenRoute?.(route) : undefined}
            />
          )
        })}
      </div>
    </div>
  )
}
