import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { languages } from '../constants'
import type { LanguageKey } from './Editor'

export const LanguageSelector = ({ language , onSelect }: { language: string , onSelect: (language: LanguageKey) => void }) => {
  const languageOptions = Object.keys(languages) as LanguageKey[];

  return (
    <Menu as="div" className="relative inline-block">
      <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-lg bg-neutral-800 mb-2 px-3 py-2 text-sm font-semibold text-white hover:bg-white/20">
        {language}
      </MenuButton>

      <MenuItems
        transition
        className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-neutral-800 outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
          {languageOptions.map((lang) => (
            <MenuItem key={lang}>
                <button onClick={() => onSelect(lang)}
                  className={`${language === lang ? 'bg-white/20 text-white' : 'text-gray-200'
                  } block w-full px-4 py-2 text-left text-sm`}
                >
                  {lang}
                </button>
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  )
}
