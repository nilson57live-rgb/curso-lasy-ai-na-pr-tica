'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  BookOpen, 
  CheckCircle2, 
  Lock, 
  PlayCircle, 
  Award,
  TrendingUp,
  Target,
  Zap
} from 'lucide-react'

type Module = {
  id: number
  title: string
  description: string
  video_url?: string
  content: string
  order: number
  completed?: boolean
}

const MODULES_DATA: Module[] = [
  {
    id: 1,
    title: 'Módulo 1: Introdução à Lasy AI',
    description: 'Conheça a plataforma e suas possibilidades',
    content: 'Bem-vindo ao curso! Neste módulo você vai aprender os fundamentos da Lasy AI...',
    order: 1,
    video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 2,
    title: 'Módulo 2: Criando Seu Primeiro App',
    description: 'Aprenda a criar apps do zero com IA',
    content: 'Vamos criar seu primeiro aplicativo usando comandos de voz...',
    order: 2
  },
  {
    id: 3,
    title: 'Módulo 3: Design e Interface',
    description: 'Crie interfaces profissionais e atraentes',
    content: 'Aprenda técnicas de design para criar apps visualmente impactantes...',
    order: 3
  },
  {
    id: 4,
    title: 'Módulo 4: Funcionalidades Avançadas',
    description: 'Integre APIs, banco de dados e autenticação',
    content: 'Descubra como adicionar funcionalidades complexas aos seus apps...',
    order: 4
  },
  {
    id: 5,
    title: 'Módulo 5: Monetização',
    description: 'Estratégias para vender seus apps',
    content: 'Aprenda a precificar, vender e escalar seus aplicativos...',
    order: 5
  },
  {
    id: 6,
    title: 'Módulo 6: Marketing Digital',
    description: 'Divulgue seus apps e conquiste clientes',
    content: 'Estratégias de marketing para promover seus aplicativos...',
    order: 6
  },
  {
    id: 7,
    title: 'Módulo 7: Automação e Escala',
    description: 'Automatize processos e escale seu negócio',
    content: 'Aprenda a criar sistemas automatizados para vender mais...',
    order: 7
  },
  {
    id: 8,
    title: 'Módulo 8: Casos de Sucesso',
    description: 'Aprenda com quem já está lucrando',
    content: 'Análise de casos reais de alunos que já estão faturando...',
    order: 8
  },
  {
    id: 9,
    title: 'Módulo 9: Suporte e Comunidade',
    description: 'Acesse suporte e networking',
    content: 'Como usar o suporte e se conectar com outros alunos...',
    order: 9
  },
  {
    id: 10,
    title: 'Módulo 10: Certificação',
    description: 'Receba seu certificado oficial',
    content: 'Parabéns! Complete este módulo para receber seu certificado...',
    order: 10
  }
]

export default function Dashboard() {
  const [modules, setModules] = useState<Module[]>(MODULES_DATA)
  const [selectedModule, setSelectedModule] = useState<Module | null>(null)
  const [progress, setProgress] = useState(0)
  const [completedModules, setCompletedModules] = useState(0)

  useEffect(() => {
    loadProgress()
  }, [])

  const loadProgress = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return

      const { data: progressData } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', user.id)

      if (progressData) {
        const completed = progressData.filter(p => p.completed).length
        setCompletedModules(completed)
        setProgress((completed / MODULES_DATA.length) * 100)

        const updatedModules = MODULES_DATA.map(module => ({
          ...module,
          completed: progressData.some(p => p.module_id === module.id && p.completed)
        }))
        setModules(updatedModules)
      }
    } catch (error) {
      console.error('Erro ao carregar progresso:', error)
    }
  }

  const completeModule = async (moduleId: number) => {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return

      await supabase
        .from('user_progress')
        .upsert({
          user_id: user.id,
          module_id: moduleId,
          completed: true,
          completed_at: new Date().toISOString(),
          progress_percentage: 100
        })

      loadProgress()
    } catch (error) {
      console.error('Erro ao completar módulo:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Meu Aprendizado
          </h1>
          <p className="text-gray-600">
            Continue sua jornada para dominar a Lasy AI
          </p>
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="w-8 h-8" />
              <Badge className="bg-white/20 text-white">
                {Math.round(progress)}%
              </Badge>
            </div>
            <h3 className="text-2xl font-bold mb-1">{completedModules}/{MODULES_DATA.length}</h3>
            <p className="text-blue-100">Módulos Concluídos</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-green-500 to-emerald-600 text-white">
            <div className="flex items-center justify-between mb-4">
              <Target className="w-8 h-8" />
              <Badge className="bg-white/20 text-white">Ativo</Badge>
            </div>
            <h3 className="text-2xl font-bold mb-1">
              {MODULES_DATA.length - completedModules}
            </h3>
            <p className="text-green-100">Módulos Restantes</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-purple-500 to-pink-600 text-white">
            <div className="flex items-center justify-between mb-4">
              <Zap className="w-8 h-8" />
              <Badge className="bg-white/20 text-white">Novo</Badge>
            </div>
            <h3 className="text-2xl font-bold mb-1">
              {completedModules >= 10 ? 'Disponível' : 'Bloqueado'}
            </h3>
            <p className="text-purple-100">Certificado</p>
          </Card>
        </div>

        {/* Progress Bar */}
        <Card className="p-6 mb-8">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-gray-900">Progresso Geral</h3>
            <span className="text-sm font-medium text-gray-600">
              {Math.round(progress)}%
            </span>
          </div>
          <Progress value={progress} className="h-3" />
        </Card>

        {/* Modules Grid */}
        <Tabs defaultValue="modules" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="modules">
              <BookOpen className="w-4 h-4 mr-2" />
              Módulos
            </TabsTrigger>
            <TabsTrigger value="certificate">
              <Award className="w-4 h-4 mr-2" />
              Certificado
            </TabsTrigger>
          </TabsList>

          <TabsContent value="modules">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {modules.map((module, index) => {
                const isLocked = index > 0 && !modules[index - 1].completed
                const isCompleted = module.completed

                return (
                  <Card
                    key={module.id}
                    className={`p-6 transition-all hover:shadow-lg ${
                      isLocked ? 'opacity-60' : 'cursor-pointer'
                    } ${isCompleted ? 'border-green-500 border-2' : ''}`}
                    onClick={() => !isLocked && setSelectedModule(module)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        {isCompleted ? (
                          <CheckCircle2 className="w-8 h-8 text-green-500" />
                        ) : isLocked ? (
                          <Lock className="w-8 h-8 text-gray-400" />
                        ) : (
                          <PlayCircle className="w-8 h-8 text-blue-500" />
                        )}
                        <Badge variant={isCompleted ? 'default' : 'secondary'}>
                          Módulo {module.order}
                        </Badge>
                      </div>
                    </div>

                    <h3 className="font-bold text-lg mb-2 text-gray-900">
                      {module.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {module.description}
                    </p>

                    {!isLocked && !isCompleted && (
                      <Button
                        className="w-full"
                        onClick={(e) => {
                          e.stopPropagation()
                          completeModule(module.id)
                        }}
                      >
                        Marcar como Concluído
                      </Button>
                    )}

                    {isCompleted && (
                      <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
                        <CheckCircle2 className="w-4 h-4" />
                        Concluído
                      </div>
                    )}

                    {isLocked && (
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Lock className="w-4 h-4" />
                        Complete o módulo anterior
                      </div>
                    )}
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          <TabsContent value="certificate">
            <Card className="p-8 text-center">
              {completedModules >= 10 ? (
                <div>
                  <Award className="w-24 h-24 text-yellow-500 mx-auto mb-6" />
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Parabéns! 🎉
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Você completou todos os módulos e está pronto para receber seu certificado oficial.
                  </p>
                  <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-500">
                    <Award className="w-5 h-5 mr-2" />
                    Gerar Certificado
                  </Button>
                </div>
              ) : (
                <div>
                  <Lock className="w-24 h-24 text-gray-400 mx-auto mb-6" />
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Certificado Bloqueado
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Complete todos os {MODULES_DATA.length} módulos para desbloquear seu certificado oficial.
                  </p>
                  <Progress value={progress} className="h-3 max-w-md mx-auto" />
                  <p className="text-sm text-gray-500 mt-4">
                    {completedModules}/{MODULES_DATA.length} módulos concluídos
                  </p>
                </div>
              )}
            </Card>
          </TabsContent>
        </Tabs>

        {/* Module Detail Modal */}
        {selectedModule && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedModule(null)}
          >
            <Card
              className="max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-bold text-gray-900">
                    {selectedModule.title}
                  </h2>
                  <Button
                    variant="ghost"
                    onClick={() => setSelectedModule(null)}
                  >
                    ✕
                  </Button>
                </div>

                {selectedModule.video_url && (
                  <div className="aspect-video mb-6 rounded-lg overflow-hidden">
                    <iframe
                      src={selectedModule.video_url}
                      className="w-full h-full"
                      allowFullScreen
                    />
                  </div>
                )}

                <div className="prose max-w-none mb-6">
                  <p className="text-gray-700">{selectedModule.content}</p>
                </div>

                {!selectedModule.completed && (
                  <Button
                    className="w-full"
                    size="lg"
                    onClick={() => {
                      completeModule(selectedModule.id)
                      setSelectedModule(null)
                    }}
                  >
                    <CheckCircle2 className="w-5 h-5 mr-2" />
                    Marcar como Concluído
                  </Button>
                )}
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
