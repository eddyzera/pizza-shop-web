import { useQuery } from '@tanstack/react-query'
import { Building, ChevronDown, LogOut } from 'lucide-react'
import React from 'react'

import { getProfile } from '@/api/getProfile'

import { Button } from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'

export const AccountMenu: React.FunctionComponent = () => {
  const { data: profile } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
  })
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={'outline'}
          className="flex select-none items-center gap-2"
        >
          {profile?.name}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="flex flex-col">
          <span>Edgar Silva</span>
          <span className="text-xs font-normal text-muted-foreground">
            edgarsilva@gmail.com
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Building className="mr-2 h-4 w-4" />
          <span>Perfil da loja</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-rose-500 dark:text-rose-400">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
