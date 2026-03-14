interface AuthPanelProps {
  children: React.ReactNode
}

export const authPanelAppearance = {
  elements: {
    rootBox: "w-full",
    cardBox: "w-full shadow-none",
    card: "w-full rounded-none border-border bg-card shadow-none",
    socialButtonsBlockButton: "h-11 rounded-none shadow-none",
    formFieldInput: "h-11 rounded-none shadow-none",
    formButtonPrimary: "h-11 rounded-none shadow-none",
    footer: "border-t border-border/70 pt-6",
    footerActionText: "text-sm text-muted-foreground",
    footerActionLink:
      "text-sm text-foreground underline-offset-4 hover:underline",
    formResendCodeLink: "text-foreground underline-offset-4 hover:underline",
    identityPreviewEditButton:
      "text-foreground underline-offset-4 hover:underline",
    otpCodeFieldInput: "h-11 rounded-none shadow-none",
  },
}

export function AuthPanel({ children }: AuthPanelProps) {
  return <div className="w-full">{children}</div>
}
