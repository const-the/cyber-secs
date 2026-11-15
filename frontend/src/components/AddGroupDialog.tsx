import { useState, useRef, useEffect, type FormEvent } from "react";

interface AddGroupDialogProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (members: string[]) => void;
}

export default function AddGroupDialog({ isOpen, onClose, onSave }: AddGroupDialogProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [members, setMembers] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState("");

    // Synchronize dialog open/close state with HTMLDialogElement
    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (isOpen && !dialog.open) {
            dialog.showModal();
            // Reset state when opening a fresh dialog
            setMembers([]);
            setInputValue("");
        } else if (!isOpen && dialog.open) {
            dialog.close();
        }
    }, [isOpen]);

    // Handle adding a new member
    const handleAddMember = (e: any) => {
        e.preventDefault();
        if (!inputValue.trim()) return; // Don't add empty strings
        setMembers([...members, inputValue.trim()]);
        setInputValue("");
    };

    // Handle deleting a member by their index
    const handleDeleteMember = (indexToRemove: number) => {
        setMembers(members.filter((_, index) => index !== indexToRemove));
    };

    // Handle final submission
    const handleConfirm = () => {
        onSave(members);
        onClose();
    };

    return (
        <dialog ref={dialogRef} onClose={onClose}>
            <h3>Nowa Grupa</h3>
            <p>Wypisz wszystkich członków nowego czatu:</p>

            {/* Form for adding members via Enter key or button */}
            <form onSubmit={handleAddMember} style={{ marginBottom: "12px" }}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Wpisz nazwę członka..."
                />
                <button type="submit" style={{ marginLeft: "8px" }}>
                    Dodaj
                </button>
            </form>

            {/* List of current members */}
            <ul style={{ paddingLeft: "20px", marginBottom: "16px" }}>
                {members.length === 0 ? (
                    <li className="faded-text">Brak członków na liście</li>
                ) : (
                    members.map((member, index) => (
                        <li key={index}>
                            <span>{member}</span>
                            <button 
                                type="button" 
                                onClick={() => handleDeleteMember(index)}>
                                Usuń
                            </button>
                        </li>
                    ))
                )}
            </ul>

            {/* Dialog Action Buttons */}
            <div style={{ display: "flex", gap: "8px" }}>
                <button 
                    type="button" 
                    onClick={handleConfirm}
                    disabled={members.length === 0}
                >
                    Utwórz
                </button>
                <button type="button" onClick={onClose}>
                    Zamknij
                </button>
            </div>
        </dialog>
    );
}