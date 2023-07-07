import { Rocket, X, Check, BookOpenCheck, BookMarked } from "lucide-react";

export function Widget() {
    return (
        <div className="w-[448px] rounded overflow-hidden">
            {/* Título Notificações */}
            <div className="bg-zinc-200 dark:bg-zinc-800 py-4 px-6 flex items-center justify-between">
                <span className="font-bold">Notificações</span>
                <button className="text-violet-500 text-xs hover:text-violet-400 font-semibold">MARCAR TODAS COMO LIDAS</button>
            </div>

            {/* Seção recente */}
            <section>
                <div className="bg-zinc-300 dark:bg-zinc-950 px-5 py-2 text-sm text-zinc-600 dark:text-zinc-300 font-medium">Recentes</div>

                <div className="divide-y-2 divide-zinc-400 dark:divide-zinc-950">
                    <div className="bg-zinc-200 dark:bg-zinc-900 px-8 py-4 flex items-start gap-6">
                        <Rocket className="w-6 h-6 text-violet-500 mt-3" />
                        <div className="flex-1 flex flex-col gap-2">
                            <p className="text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">Você recebeu um convite para participar do Next.js</p>
                            <div className="text-xs text-zinc-500 black:text-zinc-400 flex items-center gap-1">
                                <span>Convite</span>
                                <span>Há 3 min</span>
                            </div>
                        </div>
                        <div className="flex self-center gap-2">
                            <button className="w-8 h-8 rounded flex items-center justify-center bg-zinc-800 hover:bg-zinc-700">
                                <X className="w-4 h-4 text-zinc-50" />
                            </button>
                            <button className="w-8 h-8 rounded flex items-center justify-center bg-violet-500
                            hover:bg-violet-600">
                                <Check className="w-4 h-4 text-zinc-50" />
                            </button>
                        </div>
                    </div>

                    <div className="bg-zinc-200 dark:bg-zinc-900 px-8 py-4 flex items-start gap-6">
                        <BookOpenCheck className="w-6 h-6 text-violet-500 mt-3" />
                        <div className="flex-1 flex flex-col gap-2">
                            <p className="text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">Leitura Recomendada: Next.js e seu uso aplicado</p>
                            <div className="text-xs text-zinc-500 black:text-zinc-400 flex items-center gap-1">
                                <span>Recomendado</span>
                                <span>Há 2 min</span>
                            </div>
                        </div>
                        <div className="flex self-center gap-2">
                            <button className="w-8 h-8 rounded flex items-center justify-center bg-zinc-800 hover:bg-zinc-700">
                                <X className="w-4 h-4 text-zinc-50" />
                            </button>
                            <button className="w-8 h-8 rounded flex items-center justify-center bg-violet-500
                            hover:bg-violet-600">
                                <Check className="w-4 h-4 text-zinc-50" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Seção recente */}
            <section>
                <div className="bg-zinc-300 dark:bg-zinc-950 px-5 py-2 text-sm text-zinc-500 dark:text-zinc-300 font-medium">Antigas</div>
                <div className="divide-y-2 divide-zinc-400 dark:divide-zinc-950">
                    <div className="bg-zinc-200 dark:bg-zinc-900 px-8 py-4 flex items-start gap-6">
                        <BookMarked className="w-6 h-6 text-violet-500 mt-3" />
                        <div className="flex-1 flex flex-col gap-2">
                            <p className="text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">Aprenda React!</p>
                            <div className="text-xs text-zinc-500 black:text-zinc-400 flex items-center gap-1">
                                <span>Enviado</span>
                                <span>Há 4 min</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-zinc-200 dark:bg-zinc-900 px-8 py-4 flex items-start gap-6">
                        <BookMarked className="w-6 h-6 text-violet-500 mt-3" />
                        <div className="flex-1 flex flex-col gap-2">
                            <p className="text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">Novo curso: Nest.js</p>
                            <div className="text-xs text-zinc-500 black:text-zinc-400 flex items-center gap-1">
                                <span>Enviado</span>
                                <span>Há 10 min</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}