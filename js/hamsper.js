const HamsterState = {
    OK: Symbol("ok"),
    DISAPPOINTED: Symbol("disappointed")
};
Object.freeze(HamsterState);

function Hamster(x, y)
{
    this.x = x || 0;
    this.y = y || 0;
}
