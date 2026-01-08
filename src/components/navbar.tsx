import { Button } from "@/components/ui/button"

const Navbar = () => {
    return (
        <nav className="w-full py-3">
            <div className="flex h-full items-center justify-between">
                <h3 className="text-2xl font-semibold tracking-tight">
                    ButterMoney
                </h3>
                <div className="">
                    <Button variant="outline">Sign Up</Button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar